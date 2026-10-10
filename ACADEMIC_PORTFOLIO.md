# Academic Portfolio | Artificial Intelligence at Trent University

[← Back to GitHub profile](README.md)

**A hybrid portfolio of academic learning and software development.** I use this page to connect coursework with practical programming skills, explain observed outcomes, and highlight projects that may be relevant to applied AI, data science and software engineering internships.

> **Publication approach:** These are evidence-based **learning case studies**, not full submissions. Diagrams shown here are recreated from recorded outputs. Original coursework files, graded solutions, and screenshot assets are withheld from public posting pending review of instructor/course sharing rules.

## Highlighted case studies

### 🧠 Applied AI & Machine Learning

**[Wine Dataset — EDA, k-NN & Feature Scaling](portfolio/wine-machine-learning.md)**

![Recorded Wine k-NN accuracy before and after StandardScaler](portfolio/assets/wine-scaling-results.svg)

- **Exploratory assignment:** 178 samples, 13 features and 3 wine classes; class-coloured scatter plots of alcohol vs. colour intensity and flavanoids vs. proline; 142/36 train/test split.
- **Separate model-evaluation lab:** 133 training and 45 testing examples; `k = 5`; **77.78%** test accuracy without scaling and **93.33%** after `StandardScaler` on this split.
- **Evaluation:** A three-class confusion matrix showed 42 correct and 3 incorrect predictions after scaling.
- **Skills:** Python, NumPy/Pandas, Matplotlib, scikit-learn, dataset exploration, classification, training/testing and model evaluation.

The two activities used different train/test splits. The recorded improvement of **15.56 percentage points** is an observation from this specific lab configuration, not a general claim about every dataset.

### 🌐 PHP, MySQL & Responsive CSS

**[Totem Pool — Social Feed Application](portfolio/totem-pool.md)**

A web application demonstrating account registration, session-based login/logout, a post feed, likes, deletion controls, PDO database access, and **responsive HTML/CSS**. Desktop, mobile, login and registration screenshots have been collected from the running application and are undergoing final publication review.

**Skills:** PHP, MySQL, PDO, prepared SQL statements, HTML5, CSS3, form validation, session management and mobile-friendly UI design.

### 🔎 C# Data Structures & Algorithms

**[Graph Algorithms — DFS, BFS & Dijkstra](portfolio/csharp-graph-algorithms.md)**

![C# weighted graph with shortest route A to C to D](portfolio/assets/csharp-weighted-graph.svg)

A C#/.NET console application implementing directed weighted graphs, recursion-based DFS, queue-based BFS and Dijkstra's shortest-path algorithm.

The actual recorded program output showed **DFS: A → B → D → C**, **BFS: A → B → C → D**, and **shortest A-to-D route: A → C → D (weight 7)**.

**Skills:** C#, .NET, nested dictionaries, queues, hash sets, recursion, algorithmic reasoning and route reconstruction.

### 🔌 Digital Logic

**[Boolean Functions, Karnaugh Maps & Room-Light Control](portfolio/digital-logic.md)**

![Digital logic truth table to Logisim workflow](portfolio/assets/digital-logic-workflow.svg)

Simulated gate-level logic in Logisim, explored Boolean truth tables and Karnaugh-map simplification, and documented a room-light controller in both AND/OR/NOT and two-level NAND forms.

**Skills:** Boolean algebra, circuit simulation, Karnaugh maps and digital logic.

### 📊 R & Statistical Learning

**[R Programming and Statistical Learning — Foundations](portfolio/r-statistical-learning.md)**

Practiced R vectors, indexing, arithmetic, descriptive statistics, built-in datasets, and R Markdown reporting, including `mtcars` fuel economy and a pressure-versus-temperature plot.

**Skills:** R, RStudio, R Markdown, descriptive statistics and data exploration.

---

## Learning areas and additional work

| Area | Additional work in progress | Next public evidence |
| --- | --- | --- |
| Iris classification | DataFrame construction, visualizations, k-nearest neighbours experiments | An independent, reproducible Python example |
| PHP/MySQL address book | Searchable records, form validation, PDO queries | A sanitized standalone demonstration |
| Computer systems fundamentals | Number systems and digital logic exercises | Original explanations and interactive examples |
| Statistical learning | R exercises, sampling and statistical reasoning | Extended reproducible analyses |

## How I document projects

Each case study separates the **objective**, **tools**, **what I implemented**, **observed output**, **what I learned**, and **limitations or improvements**. Where applicable, I add documented screenshots of real program runs or original explanatory diagrams—without presenting a reconstruction as an authentic screenshot.

## Related engineering projects

My larger software projects are on my [main GitHub profile](README.md), including [AI Text Analyzer API](https://github.com/stacktech4024/ai-text-analyzer-api), [Screenshot Extractor](https://github.com/stacktech4024/Screen-Shot-Extractor), and [Whisper Mobile Application](https://github.com/stacktech4024/whisper-app).

---

*This academic index can evolve with new coursework. Public source releases and original assessed images will be reviewed against course requirements first.*
