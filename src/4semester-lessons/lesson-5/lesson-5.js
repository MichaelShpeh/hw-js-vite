const keys = ["1", "f", "c", "a", "t", "7", "m", "j", "l", "-"]; //!масив клавіш які потрібно натиснути
let isGameActive = false; //! стан гри
let currentKeyIndex = 0; //! поточний індекс

//! знаходимо елементи
const key = document.getElementById("key");
const gameButton = document.getElementById("game-button");

//! функція втановлює клавішу на мімсце "Тут повинна з'явитися клавіша"
const loadsKey = function () {
  key.textContent = keys[currentKeyIndex];
};
//! перемішує клавіші
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//! функція розпочнає гру
const startsGame = function () {
  shuffle(keys);
  currentKeyIndex = 0;
  isGameActive = true;
  loadsKey();
};

gameButton.addEventListener("click", startsGame);

//! додавання сдухача з перевірками, закінчення гри та початок нової
document.addEventListener("keydown", function (event) {
  if (!isGameActive) return;

  const pressedButton = event.key.toLowerCase();

  if (pressedButton === keys[currentKeyIndex].toLowerCase()) {
    currentKeyIndex += 1;
    if (currentKeyIndex == keys.length) {
      isGameActive = false;
      PNotify.success({
        text: "Гра закінчена",
        delay: 1000,
      });
    } else {
      loadsKey();
    }
  } else {
    PNotify.error({
      text: "Отакої, натиснута клавіша неправильна",
      delay: 1000,
    });
  }
});

//todo 2 Завдання

const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
             "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", 
             "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 
               420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 
               900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        borderColor: "#2196f3",
        borderWidth: 2,
        fill: true,
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 5,
      }
    ],
  };

  const config = {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'День місяця'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Кількість продажів'
          },
          beginAtZero: true
        }
      }
    },
  };

  const ctx = document.getElementById('sales-chart').getContext('2d');
  const salesChart = new Chart(ctx, config);