document.addEventListener("DOMContentLoaded", () => {
  const placeholders = document.querySelectorAll(".placeholder");
  const emojis = document.querySelectorAll(".emoji");

  // Handle Drag-and-Drop for Desktop
  emojis.forEach((emoji) => {
    emoji.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.textContent);
    });
  });

  placeholders.forEach((placeholder) => {
    placeholder.addEventListener("dragover", (e) => e.preventDefault());
    placeholder.addEventListener("drop", (e) => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      placeholder.textContent = data;
    });
  });

  // Clear all slots
  document.querySelector(".homework-btn").addEventListener("click", () => {
    placeholders.forEach((placeholder) => (placeholder.textContent = "?"));
  });
});
