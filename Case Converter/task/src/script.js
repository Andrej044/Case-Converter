const upperCaseBtn = document.getElementById("upper-case");
const lowerCaseBtn = document.getElementById("lower-case");
const properCaseBtn = document.getElementById("proper-case");
const sentenceCaseBtn = document.getElementById("sentence-case");

const textArea = document.getElementById("text-area");



upperCaseBtn.addEventListener("click", () => {
   textArea.value = textArea.value.toUpperCase();
});
lowerCaseBtn.addEventListener("click",() => {
   textArea.value = textArea.value.toLowerCase();
});
properCaseBtn.addEventListener("click", () => {
   let tmp = textArea.value;
   textArea.value = tmp.toLowerCase().split(/\s+/g).map(word => (word[0].toUpperCase() + word.substring(1))
   ).join(' ');
});
sentenceCaseBtn.addEventListener('click', () => {
   let tmp = textArea.value;
   tmp = tmp.toLowerCase().split(/\s + ./g).map((word,index) => {
    word = (index === 0 ? word[0].toUpperCase() + word.substring(1) : word);
    return word;
   }).join(' ');
   textArea.value = tmp.replace(/(^|\.\s+)(.)/g, (a, b, c) => {
      return b + c.toUpperCase();
   });
})