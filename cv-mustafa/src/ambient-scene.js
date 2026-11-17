import {
  BufferAttribute,
  BufferGeometry,
  ExtrudeGeometry,
  Group,
  LineLoop,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Shape,
  ShapeGeometry,
  SphereGeometry,
  TorusGeometry,
  WebGLRenderer,
} from 'three';

function roundedShape(width, height, radius) {
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const shape = new Shape();

  shape.moveTo(-halfWidth + radius, -halfHeight);
  shape.lineTo(halfWidth - radius, -halfHeight);
  shape.quadraticCurveTo(halfWidth, -halfHeight, halfWidth, -halfHeight + radius);
  shape.lineTo(halfWidth, halfHeight - radius);
  shape.quadraticCurveTo(halfWidth, halfHeight, halfWidth - radius, halfHeight);
  shape.lineTo(-halfWidth + radius, halfHeight);
  shape.quadraticCurveTo(-halfWidth, halfHeight, -halfWidth, halfHeight - radius);
  shape.lineTo(-halfWidth, -halfHeight + radius);
  shape.quadraticCurveTo(-halfWidth, -halfHeight, -halfWidth + radius, -halfHeight);

  return shape;
}

export function initAmbientScene(container) {
  let renderer;
  try {
    renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
  } catch (error) {
    console.warn('WebGL is unavailable; the ambient 3D scene was skipped.', error);
    return;
  }

  const scene = new Scene();
  const camera = new PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.z = 7.5;

  const cameraPlanet = new Group();
  scene.add(cameraPlanet);

  const cameraAssembly = new Group();
  cameraPlanet.add(cameraAssembly);
  const orbits = new Group();
  cameraPlanet.add(orbits);

  const bodyShape = roundedShape(1.7, 1.12, 0.16);
  const bodyGeometry = new ExtrudeGeometry(bodyShape, {
    depth: 0.2,
    bevelEnabled: true,
    bevelSegments: 3,
    bevelSize: 0.035,
    bevelThickness: 0.04,
  });
  const bodyMaterial = new MeshBasicMaterial();
  const cameraBody = new Mesh(bodyGeometry, bodyMaterial);
  cameraBody.position.z = -0.1;
  cameraAssembly.add(cameraBody);

  const faceGeometry = new ShapeGeometry(bodyShape);
  const faceMaterial = new MeshBasicMaterial();
  const cameraFace = new Mesh(faceGeometry, faceMaterial);
  cameraFace.position.z = 0.105;
  cameraAssembly.add(cameraFace);

  const bodyOutlineGeometry = new BufferGeometry().setFromPoints(bodyShape.getPoints(16));
  const bodyOutlineMaterial = new LineBasicMaterial({ transparent: true });
  const bodyOutline = new LineLoop(bodyOutlineGeometry, bodyOutlineMaterial);
  bodyOutline.position.z = 0.22;
  cameraAssembly.add(bodyOutline);

  const finderShape = new Shape();
  finderShape.moveTo(-0.25, 0.48);
  finderShape.lineTo(0.26, 0.48);
  finderShape.lineTo(0.19, 0.77);
  finderShape.lineTo(-0.17, 0.77);
  finderShape.closePath();
  const finderGeometry = new ExtrudeGeometry(finderShape, {
    depth: 0.12,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.025,
    bevelThickness: 0.025,
  });
  const finderMaterial = new MeshBasicMaterial();
  const viewfinder = new Mesh(finderGeometry, finderMaterial);
  viewfinder.position.z = 0.08;
  cameraAssembly.add(viewfinder);

  const screenShape = roundedShape(0.34, 0.31, 0.045);
  const screenGeometry = new ShapeGeometry(screenShape);
  const screenMaterial = new MeshBasicMaterial();
  const cameraScreen = new Mesh(screenGeometry, screenMaterial);
  cameraScreen.position.set(-0.54, 0.04, 0.13);
  cameraAssembly.add(cameraScreen);

  const lensGlassMaterial = new MeshBasicMaterial({ transparent: true });
  const lensGlass = new Mesh(new SphereGeometry(0.39, 40, 24), lensGlassMaterial);
  lensGlass.scale.z = 0.2;
  lensGlass.position.set(0.16, -0.015, 0.2);
  cameraAssembly.add(lensGlass);

  const lensRingMaterial = new MeshBasicMaterial({ transparent: true });
  const lensRing = new Mesh(new TorusGeometry(0.43, 0.055, 8, 64), lensRingMaterial);
  lensRing.position.set(0.16, 0, 0.3);
  cameraAssembly.add(lensRing);

  const innerLensMaterial = new MeshBasicMaterial({ transparent: true });
  const innerLensRing = new Mesh(new TorusGeometry(0.29, 0.012, 5, 64), innerLensMaterial);
  innerLensRing.position.set(0.16, 0, 0.34);
  cameraAssembly.add(innerLensRing);

  const iris = new Group();
  iris.position.set(0.16, 0, 0.36);
  cameraAssembly.add(iris);

  const irisVertices = [];
  for (let index = 0; index < 6; index += 1) {
    const angle = (index / 6) * Math.PI * 2;
    const blade = [[0.04, -0.035], [0.26, -0.13], [0.19, 0.08]];
    const rotated = blade.map(([x, y]) => [
      x * Math.cos(angle) - y * Math.sin(angle),
      x * Math.sin(angle) + y * Math.cos(angle),
    ]);
    rotated.forEach(([x, y], pointIndex) => {
      const [nextX, nextY] = rotated[(pointIndex + 1) % rotated.length];
      irisVertices.push(x, y, 0, nextX, nextY, 0);
    });
  }
  const irisGeometry = new BufferGeometry();
  irisGeometry.setAttribute('position', new BufferAttribute(new Float32Array(irisVertices), 3));
  const irisMaterial = new LineBasicMaterial({ transparent: true });
  iris.add(new LineSegments(irisGeometry, irisMaterial));

  const shutterMaterial = new MeshBasicMaterial({ transparent: true });
  const shutter = new Mesh(new SphereGeometry(0.095, 20, 12), shutterMaterial);
  shutter.scale.z = 0.45;
  shutter.position.set(0.59, 0.58, 0.16);
  cameraAssembly.add(shutter);

  const captureFlashMaterial = new MeshBasicMaterial({
    color: '#ffffff',
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  const captureFlash = new Mesh(new SphereGeometry(0.4, 32, 20), captureFlashMaterial);
  captureFlash.scale.z = 0.14;
  captureFlash.position.set(0.16, 0, 0.45);
  cameraAssembly.add(captureFlash);

  const captureBurstMaterial = new MeshBasicMaterial({
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  const captureBurst = new Mesh(new TorusGeometry(0.52, 0.018, 6, 64), captureBurstMaterial);
  captureBurst.position.set(0.16, 0, 0.46);
  cameraAssembly.add(captureBurst);

  const orbitMaterials = [];
  [
    { radius: 1.18, tube: 0.016, rotation: [0.82, 0.18, 0.32] },
    { radius: 1.47, tube: 0.011, rotation: [1.25, 0.68, -0.48] },
    { radius: 1.72, tube: 0.007, rotation: [0.32, 1.05, 0.76] },
  ].forEach(({ radius, tube, rotation }, index) => {
    const material = new MeshBasicMaterial({ transparent: true });
    const orbit = new Mesh(new TorusGeometry(radius, tube, 6, 112), material);
    orbit.rotation.set(...rotation);
    orbitMaterials.push(material);
    orbits.add(orbit);
  });

  const stars = [];
  const starCount = 180;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let index = 0; index < starCount; index += 1) {
    const y = 1 - (index / (starCount - 1)) * 2;
    const radius = Math.sqrt(1 - y * y) * 2.65;
    const angle = goldenAngle * index;
    stars.push(
      Math.cos(angle) * radius,
      y * 2.65,
      Math.sin(angle) * radius,
    );
  }
  const starGeometry = new BufferGeometry();
  starGeometry.setAttribute('position', new BufferAttribute(new Float32Array(stars), 3));
  const starMaterial = new PointsMaterial({ size: 0.018, transparent: true });
  cameraPlanet.add(new Points(starGeometry, starMaterial));

  const backgroundStarCount = 140;
  const backgroundStarSamples = Array.from({ length: backgroundStarCount }, () => [
    Math.random() * 2 - 1,
    Math.random() * 2 - 1,
  ]);
  const backgroundStarPositions = new Float32Array(backgroundStarCount * 3);
  const backgroundStarGeometry = new BufferGeometry();
  const backgroundStarAttribute = new BufferAttribute(backgroundStarPositions, 3);
  backgroundStarGeometry.setAttribute('position', backgroundStarAttribute);
  const backgroundStarMaterial = new PointsMaterial({
    color: '#b5d8f6',
    size: 1.6,
    sizeAttenuation: false,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  });
  const backgroundStarField = new Points(backgroundStarGeometry, backgroundStarMaterial);
  backgroundStarField.position.z = -4.5;
  scene.add(backgroundStarField);

  const updateBackgroundStarPositions = () => {
    const halfHeight = Math.tan((camera.fov * Math.PI) / 360)
      * (camera.position.z - backgroundStarField.position.z);
    const halfWidth = halfHeight * camera.aspect;
    backgroundStarSamples.forEach(([x, y], index) => {
      backgroundStarPositions[index * 3] = x * halfWidth;
      backgroundStarPositions[index * 3 + 1] = y * halfHeight;
      backgroundStarPositions[index * 3 + 2] = 0;
    });
    backgroundStarAttribute.needsUpdate = true;
    backgroundStarGeometry.computeBoundingSphere();
  };

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ringOpacities = [];
  const updateTheme = () => {
    const isLight = document.documentElement.dataset.theme === 'light';
    const cool = isLight ? '#24517f' : '#b5d8f6';
    const warm = isLight ? '#a85d12' : '#ffbd61';

    bodyMaterial.color.set(isLight ? '#a9bfd5' : '#182f4b');
    faceMaterial.color.set(isLight ? '#d5e1ed' : '#406b93');
    bodyOutlineMaterial.color.set(cool);
    bodyOutlineMaterial.opacity = isLight ? 0.72 : 0.86;
    finderMaterial.color.set(isLight ? '#819db9' : '#315778');
    screenMaterial.color.set(isLight ? '#edf3f8' : '#11233a');
    lensGlassMaterial.color.set(isLight ? '#6dadd0' : '#348db8');
    lensGlassMaterial.opacity = isLight ? 0.55 : 0.7;
    lensRingMaterial.color.set(warm);
    lensRingMaterial.opacity = isLight ? 0.78 : 0.88;
    innerLensMaterial.color.set(cool);
    innerLensMaterial.opacity = isLight ? 0.68 : 0.82;
    irisMaterial.color.set(warm);
    irisMaterial.opacity = isLight ? 0.7 : 0.84;
    shutterMaterial.color.set(warm);
    shutterMaterial.opacity = 0.95;
    captureBurstMaterial.color.set(warm);
    starMaterial.color.set(cool);
    starMaterial.opacity = isLight ? 0.32 : 0.52;
    backgroundStarMaterial.color.set(cool);
    backgroundStarMaterial.opacity = isLight ? 0.34 : 0.52;
    orbitMaterials.forEach((material, index) => {
      material.color.set(index === 1 ? cool : warm);
      ringOpacities[index] = isLight ? 0.34 : 0.52;
      material.opacity = ringOpacities[index];
    });
  };
  updateTheme();

  const chapterEmphasis = {
    about: { scale: 0.94, rings: 0.85, aperture: 0.92 },
    skills: { scale: 1.04, rings: 1.05, aperture: 1.05 },
    work: { scale: 1.12, rings: 1.3, aperture: 1.14 },
    cert: { scale: 0.94, rings: 1.12, aperture: 0.94 },
    path: { scale: 1, rings: 1.05, aperture: 1 },
    contact: { scale: 0.9, rings: 0.9, aperture: 0.9 },
  };
  let targetScale = 1;
  let sceneScale = 1;
  let targetRings = 1;
  let sceneRings = 1;
  let targetAperture = 1;
  let sceneAperture = 1;
  const updateChapter = () => {
    const emphasis = chapterEmphasis[document.documentElement.dataset.sceneChapter] ?? chapterEmphasis.about;
    targetScale = emphasis.scale;
    targetRings = emphasis.rings;
    targetAperture = emphasis.aperture;
  };
  updateChapter();

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.2));
  renderer.domElement.setAttribute('aria-hidden', 'true');
  container.append(renderer.domElement);

  const resize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    updateBackgroundStarPositions();
    if (reducedMotion) renderer.render(scene, camera);
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const themeObserver = new MutationObserver(updateTheme);
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  const chapterObserver = new MutationObserver(updateChapter);
  chapterObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-scene-chapter'],
  });

  let pointerX = 0;
  let pointerY = 0;
  if (!reducedMotion) {
    window.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  let frameId = 0;
  let lastFrameTime = 0;
  let captureStartedAt = Number(document.documentElement.dataset.cameraCaptureTime) || 0;
  window.addEventListener('camera:shutter', () => {
    captureStartedAt = Number(document.documentElement.dataset.cameraCaptureTime) || performance.now();
  });
  const render = (time) => {
    frameId = 0;
    if (document.hidden || reducedMotion) return;
    if (time - lastFrameTime < 32) {
      frameId = window.requestAnimationFrame(render);
      return;
    }

    const progressRange = document.documentElement.scrollHeight - window.innerHeight;
    const progress = progressRange > 0 ? window.scrollY / progressRange : 0;
    const captureAge = captureStartedAt ? (time - captureStartedAt) / 760 : -1;
    const capturePulse = captureAge >= 0 && captureAge < 1
      ? Math.sin(Math.PI * captureAge)
      : 0;
    const edge = Math.min(1.1, Math.max(0.2, camera.aspect * 0.7));
    const compactScale = Math.min(1, Math.max(0.62, camera.aspect / 0.85));
    const wideLayout = camera.aspect > 0.85;
    const destinationX = (wideLayout ? 0.1 : 0)
      + Math.cos(progress * Math.PI * 2) * edge * (wideLayout ? 0.2 : 0.3)
      + pointerX * 0.08;
    const destinationY = (wideLayout ? -1.08 : -0.55)
      + Math.sin(progress * Math.PI * 2) * 0.15
      - pointerY * 0.08;

    sceneScale += (targetScale - sceneScale) * 0.04;
    sceneRings += (targetRings - sceneRings) * 0.04;
    sceneAperture += (targetAperture - sceneAperture) * 0.04;
    cameraPlanet.scale.setScalar(compactScale * sceneScale);
    cameraPlanet.position.x += (destinationX - cameraPlanet.position.x) * 0.035;
    cameraPlanet.position.y += (destinationY - cameraPlanet.position.y) * 0.035;
    cameraPlanet.rotation.x += (pointerY * 0.16 - cameraPlanet.rotation.x) * 0.025;
    cameraPlanet.rotation.y += (pointerX * 0.1 - cameraPlanet.rotation.y) * 0.025;
    cameraPlanet.rotation.z = Math.sin(progress * Math.PI * 2) * 0.08 + pointerX * 0.025;
    cameraAssembly.rotation.z = Math.sin(progress * Math.PI * 2) * 0.035;
    iris.scale.setScalar(sceneAperture * (1 - capturePulse * 0.76));
    iris.rotation.z += 0.003;
    captureFlashMaterial.opacity = captureAge >= 0 && captureAge < 0.18
      ? (1 - captureAge / 0.18) * 0.92
      : 0;
    captureBurstMaterial.opacity = captureAge >= 0 && captureAge < 0.76
      ? (1 - captureAge / 0.76) * 0.82
      : 0;
    captureBurst.scale.setScalar(captureAge < 0 ? 1 : 1 + Math.min(captureAge / 0.76, 1) * 1.6);
    orbits.rotation.y += 0.0018;
    orbits.rotation.z += 0.001;
    backgroundStarField.rotation.z += 0.00008;
    orbitMaterials.forEach((material, index) => {
      material.opacity = ringOpacities[index] * sceneRings;
    });

    renderer.render(scene, camera);
    lastFrameTime = time;
    frameId = window.requestAnimationFrame(render);
  };

  const start = () => {
    if (document.hidden || reducedMotion || frameId) return;
    lastFrameTime = 0;
    frameId = window.requestAnimationFrame(render);
  };
  const stop = () => {
    window.cancelAnimationFrame(frameId);
    frameId = 0;
  };
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });
  start();
}
