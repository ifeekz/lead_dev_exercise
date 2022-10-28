import 'package:flutter/material.dart';
import 'package:my_olist_orders/screens/login/index.dart';

void main() {
  runApp(const MyOListOrders());
}

class MyOListOrders extends StatelessWidget {
  const MyOListOrders({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My OList Orders',
      theme: ThemeData(
        primarySwatch: Colors.teal,
      ),
      home: const LoginScreen(),
    );
  }
}
