
from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # item is (R, G, B, A)
        # If pixel is near white, make transparent
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            new_data.append((255, 255, 255, 0))
        # If pixel is dark (the logo text presumably), make it White for Dark Mode
        elif item[0] < 150 and item[1] < 150 and item[2] < 150:
            new_data.append((255, 255, 255, 255))
        else:
            # Keep original color (e.g. the purple icon parts)
            # Maybe brighten them slightly?
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path)
    print(f"Processed image saved to {output_path}")

remove_background("public/logo.png", "public/logo-transparent.png")
