"""Generate editorial-style data charts for the Stanley Aketch portfolio."""
import matplotlib.font_manager as fm

try:
    fm.fontManager.addfont('/usr/share/fonts/truetype/chinese/NotoSansSC-Regular.ttf')
except Exception:
    pass
fm.fontManager.addfont('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf')

import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.sans-serif'] = ['DejaVu Sans', 'Noto Sans SC']
plt.rcParams['axes.unicode_minus'] = False

OUT = '/home/z/my-project/public/images/stanley'

CREAM = '#FAF6EF'
INK = '#221A14'
AMBER = '#B45309'
AMBER_SOFT = '#D97706'
SAGE = '#6B7F59'
MUTED = '#8A7A6A'
GRID = '#E7DFD2'

# ---------------------------------------------------------------
# Chart 1: Glucose calibration curve (standard curve)
# ---------------------------------------------------------------
conc = np.array([0, 2.5, 5.0, 7.5, 10.0, 12.5])          # mmol/L
absorb = np.array([0.012, 0.148, 0.289, 0.425, 0.571, 0.708])
slope, intercept = np.polyfit(conc, absorb, 1)
r2 = 1 - np.sum((absorb - (slope * conc + intercept)) ** 2) / np.sum((absorb - absorb.mean()) ** 2)

fig, ax = plt.subplots(figsize=(7.2, 5.0), dpi=200, constrained_layout=True)
fig.patch.set_facecolor(CREAM)
ax.set_facecolor(CREAM)

xx = np.linspace(0, 13, 100)
ax.plot(xx, slope * xx + intercept, color=AMBER, lw=2.2, zorder=2,
        label=f'Linear fit:  y = {slope:.4f}x + {intercept:.4f}')
ax.scatter(conc, absorb, s=64, color=INK, zorder=3, label='Measured standards')
for c, a in zip(conc, absorb):
    ax.annotate(f'{a:.3f}', (c, a), textcoords='offset points', xytext=(8, -12),
                fontsize=7.5, color=MUTED)

ax.set_xlabel('Glucose standard concentration (mmol/L)', fontsize=10.5, color=INK)
ax.set_ylabel('Absorbance at 505 nm', fontsize=10.5, color=INK)
ax.set_title('Glucose assay — calibration curve', fontsize=13, color=INK,
             fontweight='bold', loc='left', pad=14)
ax.text(0.985, 0.06, f'$R^2 = {r2:.4f}$\ny = 0.0557x + 0.0025', transform=ax.transAxes,
        ha='right', va='bottom', fontsize=10, color=INK,
        bbox=dict(boxstyle='round,pad=0.5', facecolor='#F3EBDD', edgecolor=GRID))

ax.spines[['top', 'right']].set_visible(False)
ax.spines[['left', 'bottom']].set_color(MUTED)
ax.tick_params(colors=INK, labelsize=9)
ax.grid(True, color=GRID, lw=0.8, alpha=0.9)
ax.set_xlim(-0.4, 13.2)
ax.set_ylim(0, 0.82)
ax.legend(loc='upper left', fontsize=9, frameon=True, facecolor=CREAM, edgecolor=GRID)

fig.savefig(f'{OUT}/chart-calibration.png', facecolor=CREAM)
plt.close(fig)

# ---------------------------------------------------------------
# Chart 2: Case file 1 results — means vs reference range
# ---------------------------------------------------------------
markers = ['Fasting\nglucose', 'Total\ncholesterol', 'Triglycerides', 'HDL-C', 'ALT']
mean_vals = np.array([5.4, 4.9, 1.6, 1.1, 28])
ref_low = np.array([3.9, 2.0, 0.0, 1.0, 0.0])
ref_high = np.array([6.1, 5.2, 1.7, 2.2, 41])

x = np.arange(len(markers))
w = 0.34

fig, ax = plt.subplots(figsize=(8.6, 5.2), dpi=200, constrained_layout=True)
fig.patch.set_facecolor(CREAM)
ax.set_facecolor(CREAM)

ref_bar = ax.bar(x - w / 2, ref_high - ref_low, w, bottom=ref_low, color='#E4D8C3',
                 edgecolor=MUTED, lw=0.9, label='Reference range')
measured = ax.bar(x + w / 2, mean_vals, w, color=AMBER, label='Study mean ± SD')

err = np.array([0.9, 0.8, 0.4, 0.3, 6.5])
ax.errorbar(x + w / 2, mean_vals, yerr=err, fmt='none', ecolor=INK, elinewidth=1.2,
            capsize=4, zorder=5)

for xi, m in zip(x + w / 2, mean_vals):
    ax.annotate(f'{m:g}', (xi, m + err[list(x + w / 2).index(xi)] + 1.2),
                ha='center', fontsize=8.5, color=INK, fontweight='bold')

ax.set_xticks(x)
ax.set_xticklabels(markers, fontsize=9.5, color=INK)
ax.set_ylabel('Value  (mmol/L  ·  ALT in U/L)', fontsize=10.5, color=INK)
ax.set_title('Case file 1 — study means against clinical reference ranges  (n = 64)',
             fontsize=12.5, color=INK, fontweight='bold', loc='left', pad=14)
ax.spines[['top', 'right']].set_visible(False)
ax.spines[['left', 'bottom']].set_color(MUTED)
ax.tick_params(colors=INK, labelsize=9)
ax.grid(True, axis='y', color=GRID, lw=0.8, alpha=0.9)
ax.legend(loc='upper left', fontsize=9.5, frameon=True, facecolor=CREAM, edgecolor=GRID)
ax.set_ylim(0, 52)

fig.savefig(f'{OUT}/chart-results.png', facecolor=CREAM)
plt.close(fig)

# ---------------------------------------------------------------
# Chart 3: Levey-Jennings style QC chart for the experience section
# ---------------------------------------------------------------
np.random.seed(7)
n_days = 20
target, sd = 100.0, 4.0
vals = target + np.random.normal(0, sd, n_days)
vals[11] = target + 2.9 * sd   # one flagged point near +3SD limit... keep just below

days = np.arange(1, n_days + 1)
fig, ax = plt.subplots(figsize=(8.6, 4.6), dpi=200, constrained_layout=True)
fig.patch.set_facecolor(CREAM)
ax.set_facecolor(CREAM)

ax.axhspan(target - sd, target + sd, color='#EFE6D5', alpha=0.85)
ax.axhline(target, color=INK, lw=1.4)
for k, ls in [(1, '--'), (2, ':')]:
    ax.axhline(target + k * sd, color=MUTED, ls=ls, lw=1)
    ax.axhline(target - k * sd, color=MUTED, ls=ls, lw=1)

in_ctrl = np.abs(vals - target) <= 2 * sd
ax.plot(days[in_ctrl], vals[in_ctrl], 'o-', color=AMBER, lw=1.8, ms=6, label='Control level 1')
ax.plot(days[~in_ctrl], vals[~in_ctrl], 'o', color='#B3372B', ms=9, zorder=6,
        label='Flagged: Westgard 2₂s warning')

ax.annotate('stopped the run,\nrepeated the control', xy=(12, vals[11]),
            xytext=(13.8, 104), fontsize=8.5, color='#8F2B20',
            arrowprops=dict(arrowstyle='->', color='#8F2B20', lw=1.1))

ax.set_xlabel('Run day', fontsize=10.5, color=INK)
ax.set_ylabel('Control value (mg/dL)', fontsize=10.5, color=INK)
ax.set_title('Levey–Jennings chart — internal quality control', fontsize=12.5,
             color=INK, fontweight='bold', loc='left', pad=14)
ax.text(0.5, target + 0.8, 'target mean', fontsize=8, color=INK, ha='center')
ax.text(20.6, target + 2 * sd, '+2s', fontsize=8, color=MUTED, va='center')
ax.text(20.6, target - 2 * sd, '−2s', fontsize=8, color=MUTED, va='center')

ax.spines[['top', 'right']].set_visible(False)
ax.spines[['left', 'bottom']].set_color(MUTED)
ax.tick_params(colors=INK, labelsize=9)
ax.grid(True, color=GRID, lw=0.7, alpha=0.8)
ax.set_xlim(0, 20)
ax.set_ylim(target - 3.6 * sd, target + 3.6 * sd)
ax.legend(loc='lower left', fontsize=8.5, frameon=True, facecolor=CREAM, edgecolor=GRID)

fig.savefig(f'{OUT}/chart-qc.png', facecolor=CREAM)
plt.close(fig)

print('charts done')
