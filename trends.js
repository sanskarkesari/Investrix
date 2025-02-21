// Example data for Sector Growth
const sectorGrowthCtx = document.getElementById('sectorGrowthChart').getContext('2d');
const sectorGrowthChart = new Chart(sectorGrowthCtx, {
    type: 'bar',
    data: {
        labels: ['Technology', 'Healthcare', 'Finance', 'Energy', 'Retail'],
        datasets: [{
            label: 'Growth (%)',
            data: [15, 10, 8, 5, 7],
            backgroundColor: ['#4caf50', '#2196f3', '#ff5722', '#ffc107', '#9c27b0'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    },
});

// Example data for Investment Distribution
const investmentDistributionCtx = document.getElementById('investmentDistributionChart').getContext('2d');
const investmentDistributionChart = new Chart(investmentDistributionCtx, {
    type: 'pie',
    data: {
        labels: ['Technology', 'Healthcare', 'Finance', 'Energy', 'Retail'],
        datasets: [{
            data: [40, 20, 15, 15, 10],
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    },
});

// Example data for Emerging Technologies
const emergingTechCtx = document.getElementById('emergingTechChart').getContext('2d');
const emergingTechChart = new Chart(emergingTechCtx, {
    type: 'line',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'AI Adoption',
            data: [20, 30, 45, 60, 80],
            borderColor: '#4caf50',
            fill: false,
        }, {
            label: 'Blockchain Adoption',
            data: [15, 25, 35, 50, 70],
            borderColor: '#2196f3',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    },
});
