#!/bin/sh

alert="$OMC_OMC_SUPPORT_PATH/alert"
dialog="$OMC_OMC_SUPPORT_PATH/omc_dialog_control"
plister="$OMC_OMC_SUPPORT_PATH/plister"
filt="$OMC_OMC_SUPPORT_PATH/filt"
pasteboard="$OMC_OMC_SUPPORT_PATH/pasteboard"
next_command="$OMC_OMC_SUPPORT_PATH/omc_next_command"

APPLET_NAME="Enoch"

# a model is bundled with the app:
AICHAT_MODEL_PATH="$OMC_APP_BUNDLE_PATH/Contents/Resources/CWC-Mistral-Nemo-12B-v2-GGUF-q4_k_m.gguf"

prefs="/Users/$USER/Library/Preferences/com.abracode.Enoch-servers.plist"
# pick a unique port for each applet
port_num="8089"
