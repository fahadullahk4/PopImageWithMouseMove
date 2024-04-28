const throttleFunction = (func, delay) => {
	let prev = 0;
	return (...args) => {
		let now = new Date().getTime();
		console.log(now - prev, delay);
		if (now - prev > delay) {
			prev = now;
			return func(...args);
		}
	};
};
document.querySelector(".center h1").addEventListener(
	"mousemove",
	throttleFunction((dets) => {
		var div = document.createElement("div");
		div.classList.add("image-div");
		div.style.left = dets.clientX + "px";
		div.style.top = dets.clientY + "px";
		document.body.appendChild(div);

		var img = document.createElement("img");
		img.setAttribute(
			"src",
			"https://plus.unsplash.com/premium_photo-1669837324386-1813fcc28947?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		);
		div.appendChild(img);

		gsap.to("img", {
			y: "0",
			ease: Power1,
			duration: .6,
		});
		gsap.to("img", {
			y: "100%",
			ease: Power2,
			delay: 0.6,
		});

		setTimeout(() => {
			div.remove();
		}, 2000);
	}, 400)
);
