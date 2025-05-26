window.addEventListener('DOMContentLoaded', () => {
  const scene = document.querySelector('a-scene');
  let currentModel = null;

  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const modelPath = item.getAttribute('data-model');

      if (currentModel) {
        currentModel.remove();
      }

      const model = document.createElement('a-entity');
      model.setAttribute('gltf-model', modelPath);
      model.setAttribute('position', '0 0 -1');
      model.setAttribute('scale', '0.5 0.5 0.5');
      model.setAttribute('rotation', '0 180 0');

      scene.appendChild(model);
      currentModel = model;
    });
  });
});
