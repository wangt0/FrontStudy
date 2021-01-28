window.setTimeout(function() {
	const customName = document.getElementById('customname');
	const randomBtn = document.getElementById('randomBtn');
	const story = document.querySelector('.story');

	function randomValueFromArray(array){
	  const random = Math.floor(Math.random() * array.length);
	  return array[random];
	}


	let storyText=':insertx:穿得很危险，路上遇见了XXX和:inserty:向他扔了一头150磅，但长得很可爱的:insertz:，吓得:insertx:赶紧掏出了50米大刀。'
	let insertX=['小明','小刚','小红'];
	let insertY=['张三','李四','王麻子'];
	let insertZ=['Mike','Tom','Lucy'];

	if(randomBtn == null) {
		alert("null");
	}
	randomBtn.addEventListener('click', generateJoke);

	function generateJoke() {
	  var newStory = storyText;

	  var xItem = randomValueFromArray(insertX);
	  var yItem = randomValueFromArray(insertY);
	  var zItem = randomValueFromArray(insertZ);

	  newStory = newStory.replace(':insertx:', xItem);
	  newStory = newStory.replace(':insertx:', xItem);
	  newStory = newStory.replace(':inserty:', yItem);
	  newStory = newStory.replace(':insertz:', zItem);

	  if(customName.value !== '') {
		const name = customName.value;
		newStory = newStory.replace('XXX', name);
	  }

	  story.textContent = newStory;
	  story.style.visibility = 'visible';
	}
}, 500);