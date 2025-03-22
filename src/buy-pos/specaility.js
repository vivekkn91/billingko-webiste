import React from "react";

export default function Speciality() {
  return (
    <section aria-labelledby="specialties-title" className="specialties-section">
      <h2 id="specialties-title" className="text-center">
        Restaurant Point of Sale Software Features & Specialties
      </h2>
      <div className="speciality-cards margin-auto" role="list">
        {[
          {
            title: "Fast & Efficient Billing",
            description: "Quick bill generation with minimal clicks for faster customer service"
          },
          {
            title: "Multi-Terminal Support",
            description: "Multiple cashiers can work simultaneously to handle peak hours"
          },
          {
            title: "WiFi-Based Connectivity",
            description: "All devices connect seamlessly over the same network for unified operations"
          },
          {
            title: "Direct Printing",
            description: "Bills print instantly without interruptions for smoother workflow"
          },
          {
            title: "Customizable Receipts",
            description: "Add logos, branding, and custom messages to enhance brand identity"
          },
          {
            title: "Real-Time Data Sync",
            description: "All transactions update on the central server instantly for accurate reporting"
          },
          {
            title: "Automatic Service Discovery",
            description: "Server detection without manual configuration for easy setup"
          },
          {
            title: "User-Friendly Interface",
            description: "Easy-to-use design for quick order processing and staff training"
          },
          {
            title: "Comprehensive Reports",
            description: "Generate daily, weekly, and monthly sales reports for business insights"
          },
          {
            title: "Discount & Tax Management",
            description: "Apply discounts and manage taxes automatically for accurate billing"
          },
          {
            title: "Multiple Payment Options",
            description: "Accept cash, cards, UPI, and digital wallets for customer convenience"
          },
          {
            title: "Kitchen Order Management",
            description: "Send orders directly to the kitchen printer for efficient food preparation"
          },
          {
            title: "Table Management System",
            description: "Easily track occupied and available tables for better service"
          },
          {
            title: "Secure & Reliable",
            description: "Data remains safe with local server storage for business continuity"
          }
        ].map((specialty, index) => (
          <article 
            key={index} 
            className="speciality-card"
            role="listitem"
          >
            <h3 className="specialty-title">{specialty.title}</h3>
            <p className="specialty-description">{specialty.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}