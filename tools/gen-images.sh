#!/bin/bash
# Generate warm-editorial imagery for the Stanley Aketch portfolio
set -u
OUT="/home/z/my-project/public/images/stanley"
mkdir -p "$OUT"

gen() {
  local file="$1"; shift
  local size="$1"; shift
  local prompt="$*"
  if [ -s "$OUT/$file" ]; then echo "skip $file (exists)"; return 0; fi
  for attempt in 1 2 3; do
    echo ">>> generating $file (attempt $attempt)"
    z-ai image -p "$prompt" -o "$OUT/$file" -s "$size" && [ -s "$OUT/$file" ] && echo "OK $file" && return 0
    sleep $((attempt * 3))
  done
  echo "FAIL $file"; return 1
}

# 1. Editorial portrait (hero)
gen portrait.jpg 864x1152 "Editorial magazine portrait photograph of a young Black African male scientist in his mid twenties, wearing a crisp white lab coat over a smart light shirt, standing in a warm-lit biochemistry laboratory, arms crossed, confident gentle expression, golden hour light through lab windows, shallow depth of field, warm amber tones, professional photography, high quality, detailed" &

# 2. Hero abstract molecular art (wide)
gen hero-art.png 1440x720 "Abstract scientific art of floating molecular structures, hexagonal chemistry ring diagrams and soft glowing particles in warm amber and gold light on a deep espresso brown background, elegant thin golden line art, editorial illustration, generous negative space on the left side, high quality, detailed" &

wait

# 3. Lab bench scene
gen bench.jpg 1344x768 "Wide editorial photograph of a biochemistry laboratory bench with a UV-Vis spectrophotometer, micropipettes in a rack, glass cuvettes filled with amber and honey colored solutions, rack of sample tubes with labels, warm golden light, shallow depth of field, professional scientific photography, high quality, detailed" &

# 4. Colorimetric assay cuvettes
gen cuvettes.jpg 1024x1024 "Close-up macro photograph of a row of glass cuvettes containing gradient colored biochemical solutions from pale yellow to deep amber red, colorimetric assay, dark warm background, dramatic golden side lighting, scientific editorial photography, high quality, detailed" &

wait

# 5. Food chemistry still life
gen food-analysis.jpg 1344x768 "Editorial still life photograph of food chemistry analysis, sorghum and millet grains, roasted groundnuts, bowls of fine porridge flour beside laboratory conical flasks and a burette on clamp, warm rustic wooden table, golden natural window light, professional photography, high quality, detailed" &

# 6. Micropipette action
gen pipette.jpg 1024x1024 "Close-up photograph of gloved hands using a micropipette to transfer an amber biochemical sample into a 96-well microplate, warm laboratory lighting, blurred background of reagent bottles, shallow depth of field, scientific editorial photography, high quality, detailed" &

wait

# 7. Lab notebook
gen notebook.jpg 1024x1024 "Editorial photograph of an open hardcover laboratory notebook with neat handwritten methods, tables and dated entries, fountain pen and safety glasses resting beside it, warm wooden bench, soft golden window light, shallow depth of field, high quality, detailed" &

# 8. Dark molecular line art (section art)
gen molecules-dark.png 1024x1024 "Abstract minimalist art of interconnected chemistry molecules and hexagon benzene rings drawn as thin elegant golden line art on a deep warm charcoal brown background, subtle glow, sophisticated editorial design, high quality" &

wait
echo "--- ALL DONE ---"
ls -la "$OUT"
