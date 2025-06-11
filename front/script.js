const plans = [
  {
    name: "Bronze",
    monthly: { price: "$28 / Month", link: "https://store.payproglobal.com/checkout?products[1][id]=113694&page-template=20280&use-test-mode=true&secret-key=4mC@0@2f8d" },
    annual: { price: "$300 / Year", link: "https://store.payproglobal.com/checkout?products[1][id]=113693&page-template=20280&use-test-mode=true&secret-key=4mC@0@2f8d" }
  },
  {
    name: "Silver",
    monthly: { price: "$100 / Month", link: "https://store.payproglobal.com/checkout?products[1][id]=113491&page-template=20280&use-test-mode=true&secret-key=4mC@0@2f8d" },
    annual: { price: "$1000 / Year", link: "https://store.payproglobal.com/checkout?products[1][id]=113692&page-template=20280&use-test-mode=true&secret-key=4mC@0@2f8d" }
  },
  {
    name: "Gold",
    monthly: { price: "$200 / Month", link: "https://store.payproglobal.com/checkout?products[1][id]=113495&page-template=20280&use-test-mode=true&secret-key=4mC@0@2f8d" },
    annual: { price: "$2000 / Year", link: "https://store.payproglobal.com/checkout?products[1][id]=113493&page-template=20280&use-test-mode=true&secret-key=4mC@0@2f8d" }
  }
];
var hello = "hello";

const plansContainer = document.getElementById("plansContainer");

plans.forEach((plan, index) => {
  const planDiv = document.createElement("div");
  planDiv.className = `plan`;

  planDiv.innerHTML = `
    <div>
        <h2>${plan.name}</h2>
        <div class="billing-options">
          <label><input type="radio" name="billing-${index}" value="monthly" checked> Monthly</label>
          <label><input type="radio" name="billing-${index}" value="annual"> Annual</label>
        </div>
    
    </div>
    <div class="price" id="price-${index}">${plan.monthly.price}</div>
    <button onclick="upgrade(${index})">Upgrade</button>
  `;

  plansContainer.appendChild(planDiv);

  // Add change listener to billing option
  planDiv.querySelectorAll(`input[name='billing-${index}']`).forEach(radio => {
    radio.addEventListener("change", (e) => {
      const selected = e.target.value;
      document.getElementById(`price-${index}`).textContent = plan[selected].price;
    });
  });
});

function upgrade(index) {
  const billingType = document.querySelector(`input[name='billing-${index}']:checked`).value;
  const selectedPlan = plans[index];
  const data = {
    plan: selectedPlan.name,
    billing: billingType,
    price: selectedPlan[billingType].price
  };

  console.log("Chosen Plan:", JSON.stringify(data));
//   window.location.href = selectedPlan[billingType].link;
  window.open(selectedPlan[billingType].link, '_blank');
}