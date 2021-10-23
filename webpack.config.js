const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); 

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',                   
    // entry: {                                         // file nguồn.  2 entry point
    //     main: [
    //         './src/index.js',
    //         './src/test.js'
    //     ]
    // },       
    output: {
        // filename: '[name].js',                       
        filename: 'bundle.js',                          // file đích (Tự đặt tên). Nó sẽ đóng gói các file js con trong file nguồn. [name] này chính là main 
        path: path.resolve(__dirname, 'dist'),          // Lưu file đích trong folder dist
        clean: true                                     // Xoá đi những file không cần thiết, không dùng đến, không hợp lệ
    },
    mode: 'development',
    devServer: {
        open: true,
        contentBase: './dist',                          // Thay vì phải mở file html bằng tay với Go Live. Thì ta sẽ khai báo cái folder chứa thư mục html cần chạy chính. Webpack sẽ tự xử lý và mở luôn
        port: 9000
    },
    // watch: true,                                     // Ta đã dùng trong package.json câu lệnh "start": "webpack --watch" nên ko cần khai báo ở đây
    plugins: [                                          // plugins: Mở rộng các tính năng, optimize code, quản lý assets rất là tốt 
        // new CleanWebpackPlugin,                      // Xoá đi những file bundle không cần thiết, những file không sử dụng đến
        new HtmlWebpackPlugin({                         // Tự sinh ra file html. Tự động phát hiện ra các file js,css mới được thêm vào hay bị thay đổi và gắn vào file html
            title: 'Webpack with Nguyễn Kiên',
            filename: 'index.html'
        }),                    
    ],
    devtool: 'inline-source-map',                       // Nếu ta chưa có chế độ development. Mỗi lần lỗi nó đều báo do file đích ở đây là file main.js (file bundle). Mà file đích (file bundle) này là file đóng gói các file con lại nên thành ra ta không biết lỗi xuất phát từ file con nào. Nên ở đây ta phải dùng đến devtool: 'inline-source-map' để biết thật sự lỗi đến từ đâu
}