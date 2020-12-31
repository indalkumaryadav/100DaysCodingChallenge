import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}


class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      darkTheme: ThemeData(brightness: Brightness.dark),
      themeMode: ThemeMode.dark,
      home: HomeScreen(),
      
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
     
      drawer: Drawer(
        child: Text("hello"),
      ),
      appBar: AppBar(
        title: Text("My Awesome App"),
        backgroundColor: Colors.black87,
      ),
      body: Container(
        child: Center(
          child: Text("indal kumar yadav"),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text("Home"),
          ),
            BottomNavigationBarItem(
            icon: Icon(Icons.message_sharp),
            title: Text("Messages"),
          ),
            BottomNavigationBarItem(
            icon: Icon(Icons.person),
            title: Text("Profile"),
          ),
          
        ],

      ),
      
    );
  }
}