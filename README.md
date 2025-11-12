# EnochApp
Enoch.app - macOS applet to run Enoch large language model locally
<br>
Enoch.app is a specialization of [AIChat.app](https://github.com/abra-code/AIChatApp/) with embedded Enoch LLM file in gguf format.
<br>

Binaries excluded from the git repo (need to be added to hydrate the applet):

Enoch.app/Contents/MacOS:<br>
OMCApplet

Enoch.app/Contents/Frameworks:<br>
Abracode.framework<br>

Enoch.app/Contents/Resources:<br>
CWC-Mistral-Nemo-12B-v2-GGUF-q4_k_m.gguf<br>

Enoch.app/Contents/Support/Llama.cpp:<br>
llama-server<br>
libggml-base.dylib<br>
libggml-cpu.dylib<br>
libggml-rpc.dylib<br>
libllama.dylib<br>
libggml-blas.dylib<br>
libggml-metal.dylib<br>
libggml.dylib<br>
libmtmd.dylib<br>

Add missing binaries from:<br>
https://github.com/abra-code/OMC/releases<br>
https://github.com/ggml-org/llama.cpp/releases<br>
https://brightu.ai/downloads<br>
