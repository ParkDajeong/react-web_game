const path = require("path");

module.exports = {
  name: "baseball-settings",
  mode: "development", // 배포: production
  devtool: "eval", // 배포: hidden-source-map
  resolve: {
    // 이렇게 설정해 놓으면, entry에 파일을 추가할 때 일일이 확장자명을 쓰지 않아도 된다.
    extensions: [".js", ".jsx"],
  },
  entry: {
    // client.jsx 에서 WordRelay.jsx를 import하고 있기 때문에, 굳이 작성할 필요 X.
    // ==> 즉, 다른 파일이 불러오는 파일은 작성하지 않아도 된다.
    app: ["./client"],
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-hot-loader/babel"],
        },
      },
    ],
  },
  plugins: [],
  output: {
    // path.join(): 경로를 합쳐줌(__dirname: 현재 폴더의 경로)
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  }, // 출력
};
