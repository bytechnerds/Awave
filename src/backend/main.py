import keyboard
from webscrapping import *

# Hotkeys List
keyboard.add_hotkey("ctrl+alt+b", getClickables(), args=('triggered', 'hotkey'), timeout=3)
keyboard.add_hotkey("ctrl+alt+i", getImages(), args=('triggered', 'hotkey'), timeout=3)
keyboard.add_hotkey("ctrl+alt+v", getPlayables(), args=('triggered', 'hotkey'), timeout=3)
# keyboard.add_hotkey("ctrl+alt+e", getEntrys(), args=('triggered', 'hotkey'), timeout=3)
# keyboard.add_hotkey("ctrl+alt+n", findBlocks(), args=('triggered', 'hotkey'), timeout=3)