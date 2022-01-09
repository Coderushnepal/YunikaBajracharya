// Finding Minimum and Maximum numbers

#include <iostream>
using namespace std;

void minMax(int array[], int size) {
    int max = INT8_MIN;
    int min = INT8_MAX;

    for (int i = 0; i < size; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    
    cout<<"["<<min<<", "<<max<<"]"<<endl;
}

int main() {
    int size;
    int *array = new int[size];

    cout<<"Enter array's size: ";
    cin>>size;
    cout<<"Enter elements of array: ";
    for (int i = 0; i < size; i++) {
        cin>>array[i];
    }

    minMax(array, size);

    return 0;
}