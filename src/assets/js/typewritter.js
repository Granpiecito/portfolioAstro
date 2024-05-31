<script>
    const words = ["Something here"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement) {
        typewriterElement.textContent = currentWord.substring(0, j-1);
    }
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement) {
        typewriterElement.textContent = currentWord.substring(0, j+1);
    } 
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();
</script>