#include <stdio.h>

int add(int num1,int num2){
    return num1+num2;
}

void main(){

    int num1,num2;
    printf("Enter number1 :- ");
    scanf("%d",&num1);
    printf("Enter number2 :- ");
    scanf("%d",&num2);

    int addnum=add(num1,num2);
    printf("Addition is %d",addnum);

}