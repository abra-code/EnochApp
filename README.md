# EnochApp
Enoch.app - macOS applet to run Enoch large language model locally

Enoch.app is a specialization of [AIChat.app](https://github.com/abra-code/AIChatApp/) with embedded Enoch LLM file in gguf format.

Binaries excluded from the git repo (need to be added to hydrate the applet):

Enoch.app/Contents/MacOS:
OMCApplet

Enoch.app/Contents/Frameworks:
Abracode.framework

Enoch.app/Contents/Resources:
CWC-Mistral-Nemo-12B-v2-GGUF-q4_k_m.gguf

Enoch.app/Contents/Support/Llama.cpp:
llama-server
libggml-base.dylib
libggml-cpu.dylib
libggml-rpc.dylib
libllama.dylib
libggml-blas.dylib
libggml-metal.dylib
libggml.dylib
libmtmd.dylib

Add missing binaries from:
https://github.com/abra-code/OMC/releases
https://github.com/ggml-org/llama.cpp/releases
https://brightu.ai/downloads
