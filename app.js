
/* ==========================================================
   DIGITAL MV - PROFESSIONAL OPERATIONS MANAGEMENT
   FRONTEND DEMO APPLICATION
========================================================== */


/* =========================
   1. APPLICATION DATA
========================= */

const menuGroups = [
    {
        id: "navlist",
        items: [
            { id: 1, name: "Dashboard", icon: "fa-chart-pie" },
            { id: 2, name: "Complaints / Intake", icon: "fa-inbox", badge: "1" },
            { id: 3, name: "Work Orders", icon: "fa-briefcase" },
            { id: 4, name: "Three-Stage Timer", icon: "fa-stopwatch", warning: true },
            { id: 5, name: "Supervisor Review Queue", icon: "fa-square-check" },
            { id: 6, name: "Visit Report Wizard", icon: "fa-clipboard-list" }
        ]
    },
    {
        id: "navlist2",
        items: [
            { id: 7, name: "Technical Checklists", icon: "fa-gauge-high" },
            { id: 8, name: "Equipment Register", icon: "fa-microchip" },
            { id: 9, name: "NCR Management", icon: "fa-triangle-exclamation", badge: "1" },
            { id: 10, name: "Materials & Inventory", icon: "fa-box-open" }
        ]
    },
    {
        id: "navlist3",
        items: [
            { id: 11, name: "Remote Support", icon: "fa-headset" },
            { id: 12, name: "Shutdown Planning", icon: "fa-power-off" },
            { id: 13, name: "Commissioning", icon: "fa-list-check" },
            { id: 14, name: "Preventive Maintenance", icon: "fa-calendar-check" },
            { id: 15, name: "Asset History", icon: "fa-clock-rotate-left" },
            { id: 16, name: "Field Engineer Tracking", icon: "fa-location-dot" }
        ]
    },
    {
        id: "navlist4",
        items: [
            { id: 17, name: "25-Column Reports", icon: "fa-file-excel" },
            { id: 18, name: "Traceability", icon: "fa-diagram-project" },
            { id: 19, name: "User & Role Management", icon: "fa-users-gear" },
            { id: 20, name: "Audit Log", icon: "fa-shield-halved" },
            { id: 21, name: "User Manual", icon: "fa-book-open" }
        ]
    }
];

const moduleData = {
    2: {
        title: "Complaints / Intake",
        subtitle: "Receive, review and manage customer complaints.",
        columns: ["Complaint ID", "Customer", "Category", "Priority", "Received Date", "Status"],
        rows: [
            ["CMP-1001", "Demo Customer A", "Power Failure", "High", "06-Nov-2026", "Pending Triage"],
            ["CMP-1002", "Demo Customer B", "Equipment Issue", "Medium", "06-Nov-2026", "Under Review"],
            ["CMP-1003", "Demo Customer C", "Voltage Issue", "Low", "05-Nov-2026", "Assigned"]
        ]
    },
    3: {
        title: "Work Orders",
        subtitle: "Manage assigned field operations and work order progress.",
        columns: ["Work Order", "Complaint ID", "Engineer", "Location", "Priority", "Status"],
        rows: [
            ["WO-2001", "CMP-1001", "Engineer A", "Demo Site A", "High", "In Progress"],
            ["WO-2002", "CMP-1002", "Engineer B", "Demo Site B", "Medium", "Assigned"]
        ]
    },
    5: {
        title: "Supervisor Review Queue",
        subtitle: "Review submitted field reports and pending approvals.",
        columns: ["Review ID", "Work Order", "Submitted By", "Submitted Date", "Review Status"],
        rows: [
            ["REV-001", "WO-2001", "Engineer A", "06-Nov-2026", "Pending"],
            ["REV-002", "WO-2002", "Engineer B", "05-Nov-2026", "Approved"]
        ]
    },
    7: {
        title: "Technical Checklists",
        subtitle: "Manage technical inspection and verification checklists.",
        columns: ["Checklist ID", "Equipment", "Inspection Type", "Assigned To", "Status"],
        rows: [
            ["CHK-001", "MV Panel A", "Visual Inspection", "Engineer A", "Completed"],
            ["CHK-002", "Transformer B", "Safety Inspection", "Engineer B", "Pending"]
        ]
    },
    8: {
        title: "Equipment Register",
        subtitle: "Maintain the medium-voltage equipment register.",
        columns: ["Asset ID", "Equipment Name", "Category", "Voltage", "Location", "Status"],
        rows: [
            ["AST-001", "MV Panel A", "Switchgear", "13.8 kV", "Demo Site A", "Active"],
            ["AST-002", "Transformer B", "Transformer", "33 kV", "Demo Site B", "Active"],
            ["AST-003", "Circuit Breaker C", "Breaker", "13.8 kV", "Demo Site C", "Maintenance"]
        ]
    },
    9: {
        title: "NCR Management",
        subtitle: "Track non-conformance reports and corrective actions.",
        columns: ["NCR ID", "Related Work Order", "Issue", "Severity", "Owner", "Status"],
        rows: [
            ["NCR-001", "WO-2001", "Inspection Observation", "Major", "QCA Team", "Open"],
            ["NCR-002", "WO-2002", "Documentation Gap", "Minor", "Engineer B", "Under Review"]
        ]
    },
    10: {
        title: "Materials & Inventory",
        subtitle: "Monitor stock, material requests and inventory movements.",
        columns: ["SKU", "Material", "Category", "Available Qty", "Unit", "Status"],
        rows: [
            ["SKU-001", "Cable Kit", "Electrical", "25", "Units", "Available"],
            ["SKU-002", "Connector Set", "Electrical", "12", "Units", "Available"],
            ["SKU-003", "Safety Gloves", "Safety", "0", "Pairs", "Out of Stock"]
        ]
    },
    11: {
        title: "Remote Support",
        subtitle: "Manage remote technical assistance requests.",
        columns: ["Request ID", "Customer", "Issue", "Assigned Team", "Status"],
        rows: [
            ["RS-001", "Demo Customer A", "Equipment Query", "Support Team A", "Open"],
            ["RS-002", "Demo Customer B", "Technical Guidance", "Support Team B", "Closed"]
        ]
    },
    12: {
        title: "Shutdown Planning",
        subtitle: "Plan and coordinate shutdown activities.",
        columns: ["Plan ID", "Site", "Equipment", "Planned Date", "Coordinator", "Status"],
        rows: [
            ["SD-001", "Demo Site A", "MV Panel A", "10-Nov-2026", "Engineer A", "Planned"],
            ["SD-002", "Demo Site B", "Transformer B", "12-Nov-2026", "Engineer B", "Pending"]
        ]
    },
    13: {
        title: "Commissioning",
        subtitle: "Track commissioning activities and completion status.",
        columns: ["Commission ID", "Asset", "Activity", "Engineer", "Date", "Status"],
        rows: [
            ["COM-001", "MV Panel A", "Initial Testing", "Engineer A", "06-Nov-2026", "In Progress"],
            ["COM-002", "Transformer B", "Final Verification", "Engineer B", "07-Nov-2026", "Pending"]
        ]
    },
    14: {
        title: "Preventive Maintenance",
        subtitle: "Schedule and track preventive maintenance activities.",
        columns: ["PM ID", "Asset", "Maintenance Type", "Due Date", "Assigned To", "Status"],
        rows: [
            ["PM-001", "MV Panel A", "Routine Inspection", "15-Nov-2026", "Engineer A", "Scheduled"],
            ["PM-002", "Transformer B", "Condition Check", "18-Nov-2026", "Engineer B", "Scheduled"]
        ]
    },
    15: {
        title: "Asset History",
        subtitle: "View maintenance and service history of registered assets.",
        columns: ["History ID", "Asset ID", "Activity", "Performed By", "Date", "Remarks"],
        rows: [
            ["HIS-001", "AST-001", "Inspection", "Engineer A", "05-Nov-2026", "Demo record"],
            ["HIS-002", "AST-002", "Maintenance", "Engineer B", "03-Nov-2026", "Demo record"]
        ]
    },
    16: {
        title: "Field Engineer Tracking",
        subtitle: "View field assignment and engineer activity information.",
        columns: ["Engineer ID", "Engineer", "Work Order", "Assigned Area", "Activity Status"],
        rows: [
            ["ENG-001", "Engineer A", "WO-2001", "Demo Area A", "On Site"],
            ["ENG-002", "Engineer B", "WO-2002", "Demo Area B", "Assigned"]
        ]
    },
    17: {
        title: "25-Column Reports",
        subtitle: "Review operational reports and export demo data.",
        columns: ["Report ID", "Report Name", "Period", "Generated By", "Generated Date", "Status"],
        rows: [
            ["RPT-001", "Operations Summary", "November 2026", "Admin", "06-Nov-2026", "Ready"],
            ["RPT-002", "Quality Summary", "November 2026", "Supervisor", "06-Nov-2026", "Ready"]
        ]
    },
    18: {
        title: "Traceability",
        subtitle: "Follow the relationship between complaints, work orders and closure records.",
        columns: ["Trace ID", "Complaint", "Work Order", "Visit Report", "NCR", "Current Stage"],
        rows: [
            ["TR-001", "CMP-1001", "WO-2001", "VR-001", "NCR-001", "In Progress"],
            ["TR-002", "CMP-1002", "WO-2002", "VR-002", "—", "Review"]
        ]
    },
    19: {
        title: "User & Role Management",
        subtitle: "View demo user accounts and role assignments.",
        columns: ["User ID", "User Name", "Role", "Department", "Account Status"],
        rows: [
            ["USR-001", "Admin Demo", "Administrator", "Administration", "Active"],
            ["USR-002", "Engineer A", "Field Engineer", "Operations", "Active"],
            ["USR-003", "Supervisor A", "Supervisor", "Quality", "Active"]
        ]
    },
    20: {
        title: "Audit Log",
        subtitle: "Review recorded demo activities and system events.",
        columns: ["Log ID", "User", "Activity", "Module", "Date & Time", "Result"],
        rows: [
            ["LOG-001", "Admin Demo", "Login", "Authentication", "06-Nov-2026", "Success"],
            ["LOG-002", "Supervisor A", "Review Submitted", "Supervisor Queue", "06-Nov-2026", "Success"]
        ]
    }
};


/* =========================
   2. NAVIGATION
========================= */

let currentModule = 1;

function renderNavigation() {
    menuGroups.forEach(group => {
        const container = document.getElementById(group.id);

        if (!container) return;

        container.innerHTML = group.items.map(item => `
            <button
                type="button"
                class="nav-item ${item.id === currentModule ? "active" : ""} ${item.warning ? "warning-item" : ""}"
                onclick="go(${item.id})"
                title="${item.name}"
            >
                <i class="fa-solid ${item.icon}"></i>
                <span>${item.name}</span>
                ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ""}
            </button>
        `).join("");
    });
}

function go(moduleId) {
    currentModule = Number(moduleId);

    renderNavigation();
    renderPage();

    document.querySelectorAll(".top-link").forEach(link => {
        link.classList.remove("active");
    });

    const topLinks = document.querySelectorAll(".top-link");

    const topLinkMap = {
        1: 0,
        2: 1,
        3: 2,
        4: 3,
        6: 4,
        17: 5
    };

    if (topLinkMap[currentModule] !== undefined) {
        topLinks[topLinkMap[currentModule]]?.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   3. MAIN PAGE RENDERER
========================= */

function renderPage() {
    const app = document.getElementById("app");

    if (!app) return;

    if (currentModule === 1) {
        app.innerHTML = renderDashboard();
        setTimeout(drawCharts, 50);
        return;
    }

    if (currentModule === 2) {
        app.innerHTML = renderComplaintPage();
        return;
    }

    if (currentModule === 4) {
        app.innerHTML = renderTimerPage();
        return;
    }

    if (currentModule === 6) {
        app.innerHTML = renderVisitWizard();
        return;
    }

    if (currentModule === 21) {
        app.innerHTML = renderManualPage();
        return;
    }

    if (moduleData[currentModule]) {
        app.innerHTML = renderTableModule(moduleData[currentModule]);
        return;
    }

    app.innerHTML = renderComingSoon();
}


/* =========================
   4. DASHBOARD
========================= */

function renderDashboard() {

    return `
        <section class="dashboard-header">

            <div class="dashboard-title">
                <h1>
                    MV Operations Dashboard
                    <span class="live-label">Live Enterprise Ops</span>
                </h1>

                <p>
                    Real-time medium-voltage customer service pipeline,
                    engineer dispatch, and quality control.
                </p>
            </div>

            <div class="dashboard-filters">

                <select class="filter-select" id="regionFilter"
                    onchange="toast('Region filter selected')">
                    <option value="all">Region: All Regions (Demo)</option>
                    <option>Region A</option>
                    <option>Region B</option>
                    <option>Region C</option>
                </select>

                <button class="primary-button" onclick="go(19)">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    Requirements Matrix
                </button>

            </div>

        </section>


        <section class="kpi-grid">

            ${kpiCard("Unverified Intake", "1", "Triage Pending",
                "fa-inbox", "blue", "text-blue")}

            ${kpiCard("Active Work Orders", "2", "In Field",
                "fa-briefcase", "purple", "text-purple")}

            ${kpiCard("Active Timers", "1", "Live Clock",
                "fa-stopwatch", "orange", "text-orange")}

            ${kpiCard("Pending Approvals", "0", "Supervisor Gate",
                "fa-clock", "purple", "text-purple")}

            ${kpiCard("Open Quality NCRs", "1", "QCA Review",
                "fa-triangle-exclamation", "red", "text-red")}

            ${kpiCard("Registered MV Assets", "4", "13.8 / 33 kV",
                "fa-microchip", "cyan", "text-cyan")}

            ${kpiCard("Inventory SKUs", "4", "Ledger Tracked",
                "fa-boxes-stacked", "green", "text-green")}

            ${kpiCard("Closed Cases", "0", "Signed Off",
                "fa-circle-check", "green", "text-green")}

        </section>


        <section class="dashboard-grid">

            <div class="dashboard-panel">

                <div class="panel-header">

                    <div>
                        <h3>Complaint Categories &amp; Fault Distribution</h3>
                        <p>Volume by medium-voltage issue classification</p>
                    </div>

                    <span class="panel-total">3 Total Cases</span>

                </div>

                <div class="chart-container">
                    <canvas id="complaintChart" width="750" height="270"></canvas>
                </div>

            </div>


            <div class="dashboard-panel">

                <div class="panel-header">

                    <div>
                        <h3>Priority &amp; SLA Distribution</h3>
                        <p>Operational triage severity</p>
                    </div>

                </div>

                <div class="chart-container">
                    <canvas id="priorityChart" width="330" height="270"></canvas>
                </div>

                <div class="chart-legend">
                    <span><i class="legend-dot red"></i> High Priority</span>
                    <span><i class="legend-dot orange"></i> Medium Priority</span>
                    <span><i class="legend-dot blue"></i> Low Priority</span>
                </div>

            </div>

        </section>


        <section class="dashboard-panel recent-panel">

            <div class="panel-header">

                <div>
                    <h3>Recent Complaints &amp; Work Activities</h3>
                    <p>Latest records in the demo operations environment</p>
                </div>

                <button class="action-btn" onclick="go(2)">
                    View All <i class="fa-solid fa-arrow-right"></i>
                </button>

            </div>

            <div class="table-container">

                <table>

                    <thead>
                        <tr>
                            <th>Complaint ID</th>
                            <th>Customer</th>
                            <th>Category</th>
                            <th>Priority</th>
                            <th>Assigned To</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><strong>CMP-1001</strong></td>
                            <td>Demo Customer A</td>
                            <td>Power Failure</td>
                            <td><span class="badge badge-danger">High</span></td>
                            <td>Engineer A</td>
                            <td><span class="badge badge-warning">In Progress</span></td>
                            <td><button class="action-btn" onclick="go(2)">View</button></td>
                        </tr>

                        <tr>
                            <td><strong>CMP-1002</strong></td>
                            <td>Demo Customer B</td>
                            <td>Equipment Issue</td>
                            <td><span class="badge badge-warning">Medium</span></td>
                            <td>Engineer B</td>
                            <td><span class="badge badge-info">Assigned</span></td>
                            <td><button class="action-btn" onclick="go(2)">View</button></td>
                        </tr>

                        <tr>
                            <td><strong>CMP-1003</strong></td>
                            <td>Demo Customer C</td>
                            <td>Voltage Issue</td>
                            <td><span class="badge badge-success">Low</span></td>
                            <td>Not Assigned</td>
                            <td><span class="badge badge-neutral">Pending</span></td>
                            <td><button class="action-btn" onclick="go(2)">View</button></td>
                        </tr>
                    </tbody>

                </table>

            </div>

        </section>


        <section class="dashboard-grid bottom-dashboard-grid">

            <div class="dashboard-panel">

                <div class="panel-header">
                    <div>
                        <h3>Operational Workflow</h3>
                        <p>Complaint to case closure process</p>
                    </div>
                </div>

                <div class="workflow-steps">

                    <div class="workflow-step completed">
                        <span>1</span>
                        <strong>Intake</strong>
                    </div>

                    <div class="workflow-line"></div>

                    <div class="workflow-step active">
                        <span>2</span>
                        <strong>Triage</strong>
                    </div>

                    <div class="workflow-line"></div>

                    <div class="workflow-step">
                        <span>3</span>
                        <strong>Dispatch</strong>
                    </div>

                    <div class="workflow-line"></div>

                    <div class="workflow-step">
                        <span>4</span>
                        <strong>Field Visit</strong>
                    </div>

                    <div class="workflow-line"></div>

                    <div class="workflow-step">
                        <span>5</span>
                        <strong>Closure</strong>
                    </div>

                </div>

            </div>


            <div class="dashboard-panel">

                <div class="panel-header">
                    <div>
                        <h3>System Overview</h3>
                        <p>Demo application status</p>
                    </div>
                </div>

                <div class="system-overview">

                    <div>
                        <span class="status-dot"></span>
                        Frontend Status
                        <strong>Running</strong>
                    </div>

                    <div>
                        <span class="status-dot"></span>
                        Demo Data
                        <strong>Loaded</strong>
                    </div>

                    <div>
                        <span class="status-dot warning-dot"></span>
                        Backend Integration
                        <strong>Not Connected</strong>
                    </div>

                </div>

            </div>

        </section>
    `;
}


function kpiCard(label, value, note, icon, color, textColor) {

    return `
        <div class="kpi-card ${color}">

            <div class="kpi-card-header">

                <span class="kpi-label">${label}</span>

                <span class="kpi-icon ${color}">
                    <i class="fa-solid ${icon}"></i>
                </span>

            </div>

            <div class="kpi-value">
                <strong>${value}</strong>
                <span class="${textColor}">${note}</span>
            </div>

        </div>
    `;
}


/* =========================
   5. DASHBOARD CHARTS
========================= */

function drawCharts() {

    drawComplaintChart();
    drawPriorityChart();

}

function drawComplaintChart() {

    const canvas = document.getElementById("complaintChart");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const chartData = [
        { label: "Power Failure", value: 1 },
        { label: "Equipment Issue", value: 1 },
        { label: "Voltage Issue", value: 1 }
    ];

    const left = 55;
    const bottom = 220;
    const chartHeight = 175;
    const barWidth = 145;
    const gap = 45;

    ctx.font = "12px Inter";
    ctx.textAlign = "right";
    ctx.fillStyle = "#64748b";

    for (let i = 0; i <= 4; i++) {

        const y = bottom - (i * chartHeight / 4);

        ctx.fillText(i.toString(), left - 12, y + 4);

        ctx.beginPath();
        ctx.strokeStyle = "#edf1f6";
        ctx.setLineDash([4, 4]);
        ctx.moveTo(left, y);
        ctx.lineTo(width - 15, y);
        ctx.stroke();
    }

    ctx.setLineDash([]);

    chartData.forEach((item, index) => {

        const x = left + 25 + index * (barWidth + gap);
        const barHeight = (item.value / 4) * chartHeight;

        ctx.fillStyle = "#2865ed";

        ctx.beginPath();

        ctx.roundRect(
            x,
            bottom - barHeight,
            barWidth,
            barHeight,
            [6, 6, 0, 0]
        );

        ctx.fill();

        ctx.fillStyle = "#26364e";
        ctx.font = "bold 13px Inter";
        ctx.textAlign = "center";

        ctx.fillText(item.value, x + barWidth / 2, bottom - barHeight - 10);

        ctx.fillStyle = "#64748b";
        ctx.font = "11px Inter";

        ctx.fillText(
            item.label,
            x + barWidth / 2,
            bottom + 22
        );

    });

}

function drawPriorityChart() {

    const canvas = document.getElementById("priorityChart");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const centerX = 165;
    const centerY = 125;
    const radius = 70;
    const thickness = 25;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const values = [
        { value: 1, color: "#e53945" },
        { value: 1, color: "#f97316" },
        { value: 1, color: "#2865ed" }
    ];

    const total = values.reduce((sum, item) => sum + item.value, 0);

    let startAngle = -Math.PI / 2;

    values.forEach(item => {

        const angle = (item.value / total) * Math.PI * 2;

        ctx.beginPath();

        ctx.arc(
            centerX,
            centerY,
            radius,
            startAngle,
            startAngle + angle
        );

        ctx.strokeStyle = item.color;
        ctx.lineWidth = thickness;
        ctx.stroke();

        startAngle += angle;
    });

    ctx.fillStyle = "#14213a";
    ctx.font = "bold 27px Inter";
    ctx.textAlign = "center";

    ctx.fillText(total, centerX, centerY + 8);

    ctx.fillStyle = "#718096";
    ctx.font = "11px Inter";

    ctx.fillText("Cases", centerX, centerY + 27);

}


/* =========================
   6. COMPLAINT INTAKE
========================= */

function renderComplaintPage() {

    return `
        <div class="module-header">

            <div>
                <h1>Complaints / Intake</h1>
                <p>Register and manage incoming customer complaints.</p>
            </div>

            <div class="module-actions">

                <button class="secondary-button" onclick="go(1)">
                    <i class="fa-solid fa-arrow-left"></i>
                    Dashboard
                </button>

                <button class="primary-button" onclick="showComplaintForm()">
                    <i class="fa-solid fa-plus"></i>
                    New Complaint
                </button>

            </div>

        </div>


        <div class="stats-grid">

            ${smallStat("Total Complaints", "3", "fa-inbox", "blue")}
            ${smallStat("Pending Triage", "1", "fa-clock", "orange")}
            ${smallStat("High Priority", "1", "fa-triangle-exclamation", "red")}
            ${smallStat("Assigned", "1", "fa-user-check", "green")}

        </div>


        <div id="complaintFormArea"></div>


        <div class="dashboard-panel">

            <div class="panel-header">

                <div>
                    <h3>Complaint Register</h3>
                    <p>Manage complaint intake records</p>
                </div>

            </div>

            <div class="toolbar">

                <div class="search-box">
                    <i class="fa-solid fa-search"></i>
                    <input
                        type="text"
                        id="tableSearch"
                        placeholder="Search complaints..."
                        oninput="filterTable()"
                    >
                </div>

                <select class="filter-select" onchange="toast('Status filter selected')">
                    <option>All Status</option>
                    <option>Pending Triage</option>
                    <option>Assigned</option>
                    <option>Under Review</option>
                </select>

            </div>

            ${renderTable(moduleData[2])}

        </div>
    `;
}


function showComplaintForm() {

    const area = document.getElementById("complaintFormArea");

    if (!area) return;

    area.innerHTML = `
        <div class="dashboard-panel complaint-form-panel">

            <div class="panel-header">
                <div>
                    <h3>New Complaint Registration</h3>
                    <p>Enter the customer and complaint details.</p>
                </div>

                <button class="secondary-button" onclick="closeComplaintForm()">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <form onsubmit="submitComplaint(event)">

                <div class="form-grid">

                    <div class="form-group">
                        <label>Customer Name *</label>
                        <input class="form-control" name="customer" required
                            placeholder="Enter customer name">
                    </div>

                    <div class="form-group">
                        <label>Mobile Number *</label>
                        <input class="form-control" name="mobile" required
                            type="tel" pattern="[0-9]{10}" maxlength="10"
                            placeholder="10 digit mobile number">
                    </div>

                    <div class="form-group">
                        <label>Complaint Category *</label>
                        <select class="form-control" name="category" required>
                            <option value="">Select Category</option>
                            <option>Power Failure</option>
                            <option>Equipment Issue</option>
                            <option>Voltage Issue</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Priority *</label>
                        <select class="form-control" name="priority" required>
                            <option value="">Select Priority</option>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Location *</label>
                        <input class="form-control" name="location" required
                            placeholder="Enter complaint location">
                    </div>

                    <div class="form-group">
                        <label>Received Date *</label>
                        <input class="form-control" name="date" type="date" required>
                    </div>

                    <div class="form-group" style="grid-column: 1 / -1;">
                        <label>Complaint Description *</label>
                        <textarea class="form-control" name="description"
                            required placeholder="Describe the complaint..."></textarea>
                    </div>

                </div>

                <div class="form-actions">
                    <button type="button" class="secondary-button"
                        onclick="closeComplaintForm()">Cancel</button>

                    <button type="submit" class="primary-button">
                        <i class="fa-solid fa-floppy-disk"></i>
                        Save Demo Complaint
                    </button>
                </div>

            </form>

        </div>
    `;

    area.scrollIntoView({ behavior: "smooth" });

}

function closeComplaintForm() {

    const area = document.getElementById("complaintFormArea");

    if (area) area.innerHTML = "";

}

function submitComplaint(event) {

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const customer = formData.get("customer");

    toast("Demo complaint submitted for " + customer);

    form.reset();

    closeComplaintForm();

}


/* =========================
   7. THREE-STAGE TIMER
========================= */

function renderTimerPage() {

    return `
        <div class="module-header">

            <div>
                <h1>Three-Stage Job Timer</h1>
                <p>Monitor job stage timing and operational progress.</p>
            </div>

            <button class="secondary-button" onclick="go(1)">
                <i class="fa-solid fa-arrow-left"></i>
                Dashboard
            </button>

        </div>


        <div class="dashboard-panel timer-panel">

            <div class="panel-header">
                <div>
                    <h3>Work Order: WO-2001</h3>
                    <p>Demo timer session</p>
                </div>

                <span class="badge badge-info">Demo Session</span>
            </div>


            <div class="timer-stages">

                <div class="timer-stage active" id="timerStage1">
                    <div class="stage-number">01</div>
                    <h3>Stage 1</h3>
                    <p>Initial Assessment</p>
                    <span class="badge badge-warning">Current Stage</span>
                </div>

                <div class="timer-stage" id="timerStage2">
                    <div class="stage-number">02</div>
                    <h3>Stage 2</h3>
                    <p>Field Execution</p>
                    <span class="badge badge-neutral">Waiting</span>
                </div>

                <div class="timer-stage" id="timerStage3">
                    <div class="stage-number">03</div>
                    <h3>Stage 3</h3>
                    <p>Verification</p>
                    <span class="badge badge-neutral">Waiting</span>
                </div>

            </div>


            <div class="timer-display">
                <span>ELAPSED TIME</span>
                <strong id="timerValue">00:00:00</strong>
                <p id="timerStatus">Timer is currently stopped.</p>
            </div>


            <div class="timer-controls">

                <button class="primary-button" onclick="startTimer()">
                    <i class="fa-solid fa-play"></i> Start
                </button>

                <button class="secondary-button" onclick="pauseTimer()">
                    <i class="fa-solid fa-pause"></i> Pause
                </button>

                <button class="secondary-button" onclick="nextTimerStage()">
                    Next Stage <i class="fa-solid fa-arrow-right"></i>
                </button>

                <button class="action-btn danger" onclick="resetTimer()">
                    <i class="fa-solid fa-rotate-left"></i> Reset
                </button>

            </div>

        </div>
    `;
}

let timerSeconds = 0;
let timerInterval = null;
let timerStage = 1;

function updateTimerDisplay() {

    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;

    const formatted = [hours, minutes, seconds]
        .map(number => String(number).padStart(2, "0"))
        .join(":");

    const display = document.getElementById("timerValue");

    if (display) display.textContent = formatted;

}

function startTimer() {

    if (timerInterval) return;

    const status = document.getElementById("timerStatus");

    if (status) status.textContent = "Timer is running.";

    timerInterval = setInterval(() => {

        timerSeconds++;

        updateTimerDisplay();

    }, 1000);

    toast("Demo timer started");

}

function pauseTimer() {

    clearInterval(timerInterval);
    timerInterval = null;

    const status = document.getElementById("timerStatus");

    if (status) status.textContent = "Timer is paused.";

    toast("Demo timer paused");

}

function resetTimer() {

    clearInterval(timerInterval);
    timerInterval = null;

    timerSeconds = 0;
    timerStage = 1;

    updateTimerDisplay();
    updateTimerStages();

    const status = document.getElementById("timerStatus");

    if (status) status.textContent = "Timer is currently stopped.";

    toast("Timer reset");

}

function nextTimerStage() {

    if (timerStage < 3) {

        timerStage++;

        updateTimerStages();

        toast("Moved to Stage " + timerStage);

    } else {

        pauseTimer();

        const status = document.getElementById("timerStatus");

        if (status) status.textContent = "All demo stages completed.";

        toast("All three demo stages completed");

    }

}

function updateTimerStages() {

    for (let i = 1; i <= 3; i++) {

        const stage = document.getElementById("timerStage" + i);

        if (!stage) continue;

        stage.classList.toggle("active", i === timerStage);
        stage.classList.toggle("completed", i < timerStage);

    }

}


/* =========================
   8. VISIT REPORT WIZARD
========================= */

function renderVisitWizard() {

    return `
        <div class="module-header">

            <div>
                <h1>Visit Report Wizard</h1>
                <p>Enter field visit details step by step.</p>
            </div>

            <button class="secondary-button" onclick="go(1)">
                <i class="fa-solid fa-arrow-left"></i> Dashboard
            </button>

        </div>


        <div class="dashboard-panel">

            <div class="panel-header">
                <div>
                    <h3>Field Visit Report</h3>
                    <p>Demo visit report form</p>
                </div>
                <span class="badge badge-info" id="wizardStepLabel">Step 1 of 3</span>
            </div>


            <div class="wizard-progress">
                <div id="wizardProgressBar"></div>
            </div>


            <form id="visitForm" onsubmit="submitVisit(event)">

                <div class="wizard-step active" id="wizard1">

                    <h3>Step 1 — Visit Information</h3>

                    <div class="form-grid">

                        <div class="form-group">
                            <label>Work Order ID *</label>
                            <input class="form-control" name="workOrder" required
                                placeholder="Enter work order ID">
                        </div>

                        <div class="form-group">
                            <label>Engineer Name *</label>
                            <input class="form-control" name="engineer" required
                                placeholder="Enter engineer name">
                        </div>

                        <div class="form-group">
                            <label>Visit Date *</label>
                            <input class="form-control" type="date" name="visitDate" required>
                        </div>

                        <div class="form-group">
                            <label>Site Location *</label>
                            <input class="form-control" name="site" required
                                placeholder="Enter site location">
                        </div>

                    </div>

                </div>


                <div class="wizard-step" id="wizard2">

                    <h3>Step 2 — Technical Findings</h3>

                    <div class="form-grid">

                        <div class="form-group">
                            <label>Equipment Condition *</label>
                            <select class="form-control" name="condition">
                                <option>Normal</option>
                                <option>Needs Attention</option>
                                <option>Critical</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Inspection Result *</label>
                            <select class="form-control" name="result">
                                <option>Passed</option>
                                <option>Failed</option>
                                <option>Further Review Required</option>
                            </select>
                        </div>

                        <div class="form-group" style="grid-column: 1 / -1;">
                            <label>Technical Observations *</label>
                            <textarea class="form-control" name="observations"
                                placeholder="Enter technical observations..."></textarea>
                        </div>

                    </div>

                </div>


                <div class="wizard-step" id="wizard3">

                    <h3>Step 3 — Final Remarks</h3>

                    <div class="form-grid">

                        <div class="form-group">
                            <label>Work Status</label>
                            <select class="form-control" name="workStatus">
                                <option>Completed</option>
                                <option>Pending</option>
                                <option>Requires Follow-up</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Follow-up Required</label>
                            <select class="form-control" name="followup">
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>

                        <div class="form-group" style="grid-column: 1 / -1;">
                            <label>Final Remarks</label>
                            <textarea class="form-control" name="remarks"
                                placeholder="Enter final remarks..."></textarea>
                        </div>

                    </div>

                </div>


                <div class="form-actions">

                    <button type="button" class="secondary-button"
                        id="wizardPrevious" onclick="wizardPrevious()" disabled>
                        Previous
                    </button>

                    <button type="button" class="primary-button"
                        id="wizardNext" onclick="wizardNext()">
                        Next Step <i class="fa-solid fa-arrow-right"></i>
                    </button>

                    <button type="submit" class="primary-button"
                        id="wizardSubmit" style="display:none;">
                        Submit Demo Report
                    </button>

                </div>

            </form>

        </div>
    `;
}

let wizardCurrentStep = 1;

function updateWizard() {

    for (let i = 1; i <= 3; i++) {

        const step = document.getElementById("wizard" + i);

        if (step) {
            step.classList.toggle("active", i === wizardCurrentStep);
        }

    }

    const label = document.getElementById("wizardStepLabel");
    const progress = document.getElementById("wizardProgressBar");
    const previous = document.getElementById("wizardPrevious");
    const next = document.getElementById("wizardNext");
    const submit = document.getElementById("wizardSubmit");

    if (label) label.textContent = `Step ${wizardCurrentStep} of 3`;
    if (progress) progress.style.width = (wizardCurrentStep / 3 * 100) + "%";
    if (previous) previous.disabled = wizardCurrentStep === 1;

    if (next) next.style.display = wizardCurrentStep === 3 ? "none" : "inline-block";
    if (submit) submit.style.display = wizardCurrentStep === 3 ? "inline-block" : "none";

}

function wizardNext() {

    if (wizardCurrentStep < 3) {

        wizardCurrentStep++;

        updateWizard();

    }

}

function wizardPrevious() {

    if (wizardCurrentStep > 1) {

        wizardCurrentStep--;

        updateWizard();

    }

}

function submitVisit(event) {

    event.preventDefault();

    toast("Demo visit report submitted successfully");

    event.target.reset();

    wizardCurrentStep = 1;

    go(6);

}


/* =========================
   9. TABLE MODULES
========================= */

function renderTableModule(data) {

    return `
        <div class="module-header">

            <div>
                <h1>${data.title}</h1>
                <p>${data.subtitle}</p>
            </div>

            <div class="module-actions">

                <button class="secondary-button" onclick="go(1)">
                    <i class="fa-solid fa-arrow-left"></i>
                    Dashboard
                </button>

                <button class="primary-button" onclick="toast('Demo action: Add new record')">
                    <i class="fa-solid fa-plus"></i>
                    Add New
                </button>

            </div>

        </div>


        <div class="dashboard-panel">

            <div class="panel-header">

                <div>
                    <h3>${data.title} Register</h3>
                    <p>Sample records for frontend demonstration.</p>
                </div>

                <span class="badge badge-info">${data.rows.length} Demo Records</span>

            </div>


            <div class="toolbar">

                <div class="search-box">

                    <i class="fa-solid fa-search"></i>

                    <input
                        type="text"
                        id="tableSearch"
                        placeholder="Search records..."
                        oninput="filterTable()"
                    >

                </div>

                <button class="secondary-button" onclick="exportCurrentTable()">
                    <i class="fa-solid fa-download"></i>
                    Export CSV
                </button>

            </div>


            ${renderTable(data)}

        </div>
    `;
}


function renderTable(data) {

    return `
        <div class="table-container">

            <table id="dataTable">

                <thead>
                    <tr>
                        ${data.columns.map(column => `<th>${column}</th>`).join("")}
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    ${data.rows.map(row => `
                        <tr>

                            ${row.map((cell, index) => {

                                if (
                                    ["High", "Open", "Critical"].includes(cell)
                                ) {
                                    return `<td><span class="badge badge-danger">${cell}</span></td>`;
                                }

                                if (
                                    ["Pending", "In Progress", "Under Review", "Maintenance"].includes(cell)
                                ) {
                                    return `<td><span class="badge badge-warning">${cell}</span></td>`;
                                }

                                if (
                                    ["Active", "Completed", "Approved", "Available", "Success", "Closed", "Ready"].includes(cell)
                                ) {
                                    return `<td><span class="badge badge-success">${cell}</span></td>`;
                                }

                                return `<td>${cell}</td>`;

                            }).join("")}

                            <td>
                                <button class="action-btn"
                                    onclick="toast('Demo record selected')">
                                    View
                                </button>
                            </td>

                        </tr>
                    `).join("")}

                </tbody>

            </table>

        </div>
    `;
}


/* =========================
   10. SMALL STAT CARD
========================= */

function smallStat(label, value, icon, color) {

    return `
        <div class="kpi-card ${color}">

            <div class="kpi-card-header">
                <span class="kpi-label">${label}</span>
                <span class="kpi-icon ${color}">
                    <i class="fa-solid ${icon}"></i>
                </span>
            </div>

            <div class="kpi-value">
                <strong>${value}</strong>
            </div>

        </div>
    `;
}


/* =========================
   11. USER MANUAL
========================= */

function renderManualPage() {

    return `
        <div class="module-header">

            <div>
                <h1>User Manual</h1>
                <p>Basic navigation guide for the Digital MV demo.</p>
            </div>

            <button class="secondary-button" onclick="go(1)">
                <i class="fa-solid fa-arrow-left"></i>
                Dashboard
            </button>

        </div>


        <div class="dashboard-panel">

            <div class="panel-header">
                <div>
                    <h3>Application Navigation Guide</h3>
                    <p>Overview of the available demo modules.</p>
                </div>
            </div>

            <div class="manual-list">

                <div>
                    <strong>01. Dashboard</strong>
                    <p>View the operational summary and sample metrics.</p>
                </div>

                <div>
                    <strong>02. Complaints / Intake</strong>
                    <p>View demo complaint records and register a sample complaint.</p>
                </div>

                <div>
                    <strong>03. Work Orders</strong>
                    <p>Review sample work orders and assignments.</p>
                </div>

                <div>
                    <strong>04. Three-Stage Timer</strong>
                    <p>Explore the demonstration timer and stage navigation.</p>
                </div>

                <div>
                    <strong>05. Supervisor Review Queue</strong>
                    <p>Review sample approval records.</p>
                </div>

                <div>
                    <strong>06. Visit Report Wizard</strong>
                    <p>Fill a sample field visit report in three steps.</p>
                </div>

                <div>
                    <strong>07–21. Other Modules</strong>
                    <p>Use the sidebar to open the available module screens.</p>
                </div>

            </div>

            <div class="notice-box">
                <i class="fa-solid fa-circle-info"></i>
                This is a frontend demonstration. Records are sample data.
                Database, authentication and live integrations are not connected.
            </div>

        </div>
    `;
}


/* =========================
   12. COMING SOON
========================= */

function renderComingSoon() {

    return `
        <div class="dashboard-panel empty-state">

            <i class="fa-solid fa-layer-group"></i>

            <h3>Module Preview</h3>

            <p>This section is reserved for the next development phase.</p>

            <button class="primary-button" style="margin-top:18px;"
                onclick="go(1)">
                Back to Dashboard
            </button>

        </div>
    `;
}


/* =========================
   13. SEARCH TABLE
========================= */

function filterTable() {

    const input = document.getElementById("tableSearch");

    if (!input) return;

    const searchText = input.value.toLowerCase();

    const table = document.querySelector("#dataTable");

    if (!table) return;

    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(row => {

        const rowText = row.textContent.toLowerCase();

        row.style.display = rowText.includes(searchText) ? "" : "none";

    });

}


/* =========================
   14. CSV EXPORT
========================= */

function exportCurrentTable() {

    const table = document.getElementById("dataTable");

    if (!table) {
        toast("No table available to export");
        return;
    }

    const rows = [...table.querySelectorAll("tr")];

    const csv = rows.map(row => {

        const cells = [...row.querySelectorAll("th, td")];

        return cells.map(cell => {

            const value = cell.innerText.replace(/"/g, '""');

            return `"${value}"`;

        }).join(",");

    }).join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
        type: "text/csv;charset=utf-8;"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "digital-mv-demo-report.csv";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    toast("Demo CSV report downloaded");

}


/* =========================
   15. ROLE CHANGE
========================= */

function roleChanged() {

    const role = document.getElementById("role");

    if (!role) return;

    toast("Demo role selected: " + role.value);

}


/* =========================
   16. TOAST MESSAGE
========================= */

let toastTimeout;

function toast(message) {

    const element = document.getElementById("toast");

    if (!element) return;

    element.textContent = message;

    element.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {

        element.classList.remove("show");

    }, 2800);

}


/* =========================
   17. APPLICATION START
========================= */

document.addEventListener("DOMContentLoaded", () => {

    renderNavigation();

    renderPage();

    console.log("Digital MV frontend demo loaded successfully.");

});
