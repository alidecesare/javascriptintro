var num = 17;

function masks(num) {
  if (num == 0) {
    alert("you have zero masks. you will die from coronavirus.");
  }
  else if (num < 0 && num <= 5) {
    alert("you have enough masks for yourself and your family. stay inside unless it is essential. you do not have backup masks.");
  }
  else if (num > 5 && num <=35) {
    alert("you have enough masks for you and your family but be careful to ration them, they won't last forever.");
  }
  else if (num > 35) {
    alert("you are hoarding masks. the government will find you and take all your masks. be careful who you trust.");
  }
}

masks(num);
