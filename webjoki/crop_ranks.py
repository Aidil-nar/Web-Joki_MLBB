from PIL import Image

img = Image.open('public/ranks/mlbb-ranks.png')
W, H = img.size
print(f"Image size: {W}x{H}")

# Row 1 icons (y: 0 to ~255, excluding text labels below)
# Row 2 icons (y: ~255 to ~455, excluding text labels below)

# Based on the 1024x522 spritesheet layout:
# Row 1: 5 icons (Warrior, Elite, Grandmaster, Epic, Legend) spread across ~850px
# Row 2: 4 icons (Mythic, MythicHonor, MythicalGlory, MythicalImmortal) spread across ~850px
# Right side has small star icons we ignore

crops = {
    # Row 1 - badges are roughly 150-170px wide, centered in their columns
    # Format: (left, top, right, bottom)
    'warrior':          (0,    5,   170,  220),
    'elite':            (170,  5,   340,  220),
    'grandmaster':      (330,  5,   510,  220),
    'epic':             (500,  5,   680,  220),
    'legend':           (680,  5,   870,  220),
    
    # Row 2 - icons are slightly larger
    'mythic':           (0,    255, 200,  460),
    'mythic-honor':     (195,  255, 415,  460),
    'mythic-glory':     (415,  255, 640,  460),
    'mythic-immortal':  (640,  255, 870,  460),
}

for name, box in crops.items():
    cropped = img.crop(box)
    # Make square by padding shorter dimension
    w, h = cropped.size
    size = max(w, h)
    square = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    paste_x = (size - w) // 2
    paste_y = (size - h) // 2
    square.paste(cropped, (paste_x, paste_y))
    # Resize to consistent 200x200
    square = square.resize((200, 200), Image.LANCZOS)
    out_path = f'public/ranks/{name}.png'
    square.save(out_path, 'PNG')
    print(f'Saved: {out_path} ({w}x{h} -> 200x200)')

print("\nDone! All rank icons cropped.")
