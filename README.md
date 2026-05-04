# Network Traffic Monitor (Simulation System)

## Overview

This project is a web-based simulation of a network traffic monitoring system. It demonstrates how network packets can be generated, displayed, filtered, and analyzed in a structured interface.

The system does not capture real network traffic. Instead, it generates synthetic packet data to simulate network behavior for learning and demonstration purposes.

---

## Features

- Real-time packet simulation
- Start and stop monitoring control
- Packet filtering (Protocol, Source IP, Destination IP)
- Packet details view using dynamic routing
- Activity logging system
- Statistics dashboard
- Chart-based data visualization
- LocalStorage-based persistence
- Clear packets functionality
- Responsive user interface
- Not Found (404) page handling

---

## Project Structure

# Network Traffic Monitor (Simulation System)

## Overview

This project is a web-based simulation of a network traffic monitoring system. It demonstrates how network packets can be generated, displayed, filtered, and analyzed in a structured interface.

The system does not capture real network traffic. Instead, it generates synthetic packet data to simulate network behavior for learning and demonstration purposes.

---

## Features

- Real-time packet simulation
- Start and stop monitoring control
- Packet filtering (Protocol, Source IP, Destination IP)
- Packet details view using dynamic routing
- Activity logging system
- Statistics dashboard
- Chart-based data visualization
- LocalStorage-based persistence
- Clear packets functionality
- Responsive user interface
- Not Found (404) page handling

---

## Project Structure

src/
├── components/
│ ├── PacketTable.jsx
│ ├── PacketRow.jsx
│ ├── Filters.jsx
│ ├── StatsCards.jsx
│ ├── StatsCharts.jsx
│ ├── ActivityLog.jsx
│
├── pages/
│ ├── Dashboard.jsx
│ ├── PacketDetails.jsx
│ ├── NotFound.jsx
│
├── hooks/
│ ├── usePackets.js
│ ├── useLocalStorage.js
│ ├── useActivityLog.js
│
├── utils/
│ ├── packetGenerator.js
│ ├── portRules.js
│
├── App.jsx
├── main.jsx

---

## How the System Works

### Packet Generation

Packets are generated using a custom function. Each packet includes:

- Protocol (TCP, UDP, ICMP)
- Source IP address
- Destination IP address
- Packet size
- Timestamp
- Destination port
- Service (mapped from port)

The data is randomly generated to simulate realistic network traffic.

---

### Filtering

The system allows filtering based on:

- Protocol type
- Source IP address
- Destination IP address

Filtering is applied dynamically using JavaScript without reloading the page.

---

### Statistics

The system calculates:

- Total number of packets
- Number of packets per protocol
- Average packet size

Formula:

Average Packet Size = Total Packet Size / Total Number of Packets

---

### Activity Logging

The system logs key user actions such as:

- Starting monitoring
- Stopping monitoring
- Applying filters
- Clearing packets

Logs are stored in localStorage to persist across sessions.

---

### Routing

The application uses routing for navigation:

- `/` displays the main dashboard
- `/packet/:id` displays packet details
- `*` displays a Not Found page

---

## Data Persistence

The application uses localStorage to store:

- Packet data
- Filter values
- Activity logs

This ensures data remains available after page refresh.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/network-traffic-monitor.git

## Running the Project

### Install Dependencies
Run the following command to install all required packages:

npm install

### Start Development Server
To run the project locally:

npm run dev

### Live Demo
You can also access the deployed version here:
https://gulshanpucit.netlify.app
```
