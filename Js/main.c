#include <iostream>
using namespace std;

int main() {
    int ngay;
    cout << "Nhập số từ 1 đến 7 để chọn ngày trong tuần: ";
    cin >> ngay;

    switch (ngay) {
        case 1:
            cout << "Thứ Hai" << endl;
            break;
        case 2:
            cout << "Thứ Ba" << endl;
            break;
        case 3:
            cout << "Thứ Tư" << endl;
            break;
        case 4:
            cout << "Thứ Năm" << endl;
            break;
        case 5:
            cout << "Thứ Sáu" << endl;
            break;
        case 6:
            cout << "Thứ Bảy" << endl;
            break;
        case 7:
            cout << "Chủ Nhật" << endl;
            break;
        default:
            cout << "Số không hợp lệ! Vui lòng nhập từ 1 đến 7." << endl;
            break;
    }

    return 0;
}
