// This is an injected client-side JavaScript
// It is associated with OMCWebKitView instance by setting "User Defined Runtime Attributes" in nib control:
// javaScriptFile=webkit.client
// This code is executed by WebKit after HTML document is loaded

// when loading initial HTML there is a <div id="loading">
const loadingDiv = document.getElementById('loading');
if (loadingDiv)
{
	let innerHtml = '<div style="display: block; margin-top: 200px; text-align: center; height: 50vh; align-items: center; justify-content: center;">' +
					'<p><b>Enoch model is loading. Please wait...</b></p><progress indeterminate></progress><br><br>' +
					'<p><b>Enoch large language model made possible by Mike Adams of Brighteon</b></p>' +
					'<p><i>We\'ve trained Enoch on millions of articles on natural health and wellness, including thousands of hours of interview transcripts with health experts, millions of pages of content from holistic health websites, and hundreds of thousands of scientific papers on nutrition, herbal medicine and healing modalities. - Mike Adams, the Health Ranger, founder of Brighteon</i></p><br>' +
					'<p><b>Enoch.app is built with llama-server tool from open source Llama.cpp project</b></p>' +
					'<p><i>The main goal of llama.cpp is to enable LLM inference with minimal setup and state-of-the-art performance on a wide range of hardware - locally and in the cloud.<br>Apple silicon is a first-class citizen - optimized via ARM NEON, Accelerate and Metal frameworks</i></p><br>' +
					'<p><b>Enoch.app is based on AIChat.app - open source macOS applet to run large language models locally</b></p><br>' + 
					'<p><b>Enoch.app is built with OMC engine</b></p>' +
					'<p><i>OnMyCommand is a low code macOS app development environment utilizing command line tools and shell scripts</i></p><br>' +
					'</div>';
	
 	loadingDiv.innerHTML = innerHtml;
}
