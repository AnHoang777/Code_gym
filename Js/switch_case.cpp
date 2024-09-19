#include <iostream>
using namespace std;

int main() {
    int ngay;
    cout << "Nhap so tu 1 den 7 de chon ngay trong tuan: ";
    cin >> ngay;

    switch (ngay) {
        case 1:
            cout << "Thu Hai" << endl;
            break;
        case 2:
            cout << "Thu Ba" << endl;
            break;
        case 3:
            cout << "Thu Tu" << endl;
            break;
        case 4:
            cout << "Thu Nam" << endl;
            break;
        case 5:
            cout << "Thu Sau" << endl;
            break;
        case 6:
            cout << "Thu Bay" << endl;
            break;
        case 7:
            cout << "Chu Nhat" << endl;
            break;
        default:
            cout << "So không hop le! Vui long nhap lai" << endl;
            break;
    }

    return 0;
}
