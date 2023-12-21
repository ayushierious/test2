let volume = 50; // Initial volume

function updateVolumeDisplay() {
  document.getElementById('volumeValue').textContent = volume;
}

function increaseVolume() {
  if (volume < 100) {
    volume += 10;
    updateVolumeDisplay();
  }
}

function decreaseVolume() {
  if (volume > 0) {
    volume -= 10;
    updateVolumeDisplay();
  }
}
