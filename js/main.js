$(document).ready(function() {
  $("#down-arrow-icon").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
  });
  $("#up-arrow-icon").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.wordIndex++;
      typeSpeed = 500;
      this.isDeleting = false;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const txtElement = document.getElementById("txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
});

function changeNoPic() {
  $("#photo")
    .removeClass()
    .addClass("photo-0");
}

function changeFirstPic() {
  $("#photo")
    .removeClass()
    .addClass("photo-1");
}

function changeSecondPic() {
  $("#photo")
    .removeClass()
    .addClass("photo-2");
}

function changeThirdPic() {
  $("#photo")
    .removeClass()
    .addClass("photo-3");
}

function changeFourthPic() {
  $("#photo")
    .removeClass()
    .addClass("photo-4");
}
