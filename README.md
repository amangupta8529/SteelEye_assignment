## Main Components
- Dashboard - The main component that renders the entire dashboard layout. It allows users to search for orders, select currencies and display order details and timestamps.

- Card - A reusable component that displays information in a card format. It is used to display 
selected order details and timestamps.

- Dropdown - A reusable component that provides a dropdown menu for selecting currencies.

- HeaderTitle - A component responsible for displaying the header title of the dashboard.

- Search - A component that allows users to search for specific orders based on an order ID.

##Data
The dashboard uses mock data stored in JSON format, which can be found in the assets directory.

- data.json - Contains mock order data with details such as order ID, customer information, and order status.

- timeStamps.json - Contains timestamps associated with each order.

##Features
- Search Orders: Users can search for specific orders using the order ID. The search results will be filtered accordingly.

- Select Currency: Users can choose currencies (GBP, USD, JPY, EUR) from the dropdown menu to view order amounts in their preferred currency.

- Display Order Details and Timestamps: When an order is selected, its details and associated timestamps are displayed in separate cards on the dashboard when clicked on the row table.

###Live link - [https://steel-eye-assignment-2.vercel.app/]
