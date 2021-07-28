import keyboard
from chromedriver import driver
from navigationMode import *

# Hotkeys List
keyboard.add_hotkey("ctrl+alt+b", findClickables(), args=('triggered', 'hotkey'), timeout=3)
keyboard.add_hotkey("ctrl+alt+i", findImages(), args=('triggered', 'hotkey'), timeout=3)
keyboard.add_hotkey("ctrl+alt+v", findPlayables(), args=('triggered', 'hotkey'), timeout=3)
keyboard.add_hotkey("ctrl+alt+e", findEntrys(), args=('triggered', 'hotkey'), timeout=3)
# keyboard.add_hotkey("ctrl+alt+n", findBlocks(), args=('triggered', 'hotkey'), timeout=3)