// ContributionGraph.jsx
// Renders a 52-week contribution heatmap using SVG.
// Accepts a 2D array of levels (0-4) and maps them to coloured cells.

import styles from "./ContributionGraph.module.css";

const LEVEL_COLORS = [
  "var(--contrib-0)",
  "var(--contrib-1)",
  "var(--contrib-2)",
  "var(--contrib-3)",
  "var(--contrib-4)",
];

const MONTH_LABELS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function ContributionGraph({ weeks }) {
  const total = weeks.flat().reduce((sum, l) => sum + l, 0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Contribution Activity</span>
        <span className={styles.total}>{total} contributions in the last year</span>
      </div>

      <div className={styles.graphContainer}>
        {/* Day labels */}
        <div className={styles.dayLabels}>
          {DAY_LABELS.map((d, i) => (
            <span key={i} className={styles.dayLabel}>{d}</span>
          ))}
        </div>

        {/* SVG heatmap */}
        <div className={styles.svgWrapper}>
          <div className={styles.monthLabels}>
            {MONTH_LABELS.map((m, i) => (
              <span key={i} className={styles.monthLabel} style={{ left: `${i * (100 / 12)}%` }}>{m}</span>
            ))}
          </div>
          <svg viewBox={`0 0 ${52 * 14} ${7 * 14}`} className={styles.svg}>
            {weeks.map((week, wi) =>
              week.map((level, di) => (
                <rect
                  key={`${wi}-${di}`}
                  x={wi * 14}
                  y={di * 14}
                  width="11"
                  height="11"
                  rx="2"
                  fill={LEVEL_COLORS[level]}
                  className={styles.cell}
                />
              ))
            )}
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <span className={styles.legendLabel}>Less</span>
        {[0,1,2,3,4].map(l => (
          <span key={l} className={styles.legendCell} style={{ background: LEVEL_COLORS[l] }} />
        ))}
        <span className={styles.legendLabel}>More</span>
      </div>
    </div>
  );
}

export default ContributionGraph;