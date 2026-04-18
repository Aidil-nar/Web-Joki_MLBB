from PIL import Image

img = Image.open("public/ranks/rising-certifications.png")
w, h = img.size
print(f"Size: {w}x{h}")

# 7 panels in image but we need 6 (skip rightmost crystal)
# Adjust section_w based on actual image width
section_w = w // 7

crops = {
    "rising-coklat": (0,              0, section_w * 1, h),
    "rising-hijau":  (section_w * 1,  0, section_w * 2, h),
    "rising-biru":   (section_w * 2,  0, section_w * 3, h),
    "rising-ungu":   (section_w * 3,  0, section_w * 4, h),
    "rising-emas":   (section_w * 4,  0, section_w * 5, h),
    "rising-merah":  (section_w * 5,  0, section_w * 6, h),
}

for name, box in crops.items():
    cropped = img.crop(box)
    
    # Optional: Make square by centering exactly before resizing
    cw, ch = cropped.size
    size = max(cw, ch)
    square = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    # It might be RGB or RGBA, if RGB it might not be transparent but the image looks like it has a background anyway. 
    # Let's just resize it to a roughly square or keep its aspect ratio
    
    cropped = cropped.resize((200, 200), Image.LANCZOS)
    cropped.save(f"public/ranks/{name}.png")
    print(f"[OK] {name}.png saved")
