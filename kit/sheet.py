import sys,glob
from PIL import Image
a=sys.argv[1];out=sys.argv[2]
fs=sorted(glob.glob(f'st/still_{a}_*.png'),key=lambda f:float(f.split('_')[-1][:-4]))
tw,th=(360,640) if a=='v' else (640,360)
ims=[Image.open(f).convert('RGB').resize((tw,th)) for f in fs]
cols=min(len(ims),4 if a=='v' else 3);rows=(len(ims)+cols-1)//cols
sh=Image.new('RGB',(tw*cols,th*rows))
for i,im in enumerate(ims): sh.paste(im,((i%cols)*tw,(i//cols)*th))
sh.save(out)
