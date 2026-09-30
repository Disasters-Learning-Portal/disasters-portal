const URL = process.env.NEXT_DATA_VISUALIZATION_URL || "/data-visualization";

// export removing the trailing slash if present
export const DATA_VIS_URL = URL.replace(/\/$/, "");
