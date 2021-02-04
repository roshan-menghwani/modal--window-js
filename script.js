"Use Strict";
// console.log("hello");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnModalClose = document.querySelector(".close-modal");
const btnsModalShow = document.querySelectorAll(".show-modal");

// FUNCTION FOR OPENING MODAL WINDOW
const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

// FUNCTION FOR CLOSING MODAL window
const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

for (let i = 0; i < btnsModalShow.length; i++) {
	// console.log(btnsModalShow[i].textContent);
	btnsModalShow[i].addEventListener("click", openModal);
}

btnModalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		if (!modal.classList.contains("hidden")) {
			closeModal();
		}
	}
});
