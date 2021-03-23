import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter WhatsApp Clone',
      theme: ThemeData(
        primarySwatch: Color(0xff075e54),
        accentColor:Color(0xff25d366)
      ),
      home: HomeScreen(),
    );
  }
}

