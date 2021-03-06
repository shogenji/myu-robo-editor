// リストに表示するか（0: 非表示、1: 表示）, '命令', 命令コード, 命令サイズ（byte）, '命令の説明', '引数1名称', '引数1説明', 引数1最小値, 引数1最大値, '引数2名称', '引数2説明', 引数2最小値, 引数2最大値
let commandData = [
	[1, 'パワーオンスタート', 111, 1, 'プログラムの先頭に置くと電源オンとともにプログラムが始まる。'],
	[1, '前進', 2, 2, '引数（0〜255）× 0.1秒だけ両輪を前転（前進）させる。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, '後退', 8, 2, '引数（0〜255）× 0.1秒だけ両輪を後転（後退）させる。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, '右回り', 10, 2, '引数（0〜255）× 0.1秒だけ左車輪を前転・右車輪を後転。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, '左回り', 11, 2, '引数（0〜255）× 0.1秒だけ右車輪を前転・左車輪を後転。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, '停止', 0, 2, '引数（0〜255）× 0.1秒だけ停止させる。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, '左前', 1, 2, '引数（0〜255）× 0.1秒だけ左車輪を前転させる。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, '左後', 7, 2, '引数（0〜255）× 0.1秒だけ左車輪を後転させる。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, '右前', 3, 2, '引数（0〜255）× 0.1秒だけ右車輪を前転させる。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, '右後', 9, 2, '引数（0〜255）× 0.1秒だけ右車輪を後転させる。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, 'モーター左', 4, 2, 'モーターを引数（0〜255）× 0.1秒だけ左回転させる。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, 'モーター右', 6, 2, 'モーターを引数（0〜255）× 0.1秒だけ右回転させる。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, '時間', 5, 2, '引数（0〜255）× 0.1秒だけ前の状態を続ける。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, 'ブザー', 80, 2, '引数（0〜255）× 0.1秒だけブザーを鳴らす。', '時間', '時間（0〜255 × 0.1秒）', 0, 255],
	[1, '電子音', 105, 3, '第1引数（1〜255）× 0.1秒だけ第2引数のパルス幅（1〜255） の音を鳴らす。パルス幅が大きいほど音は低くなる。', '時間', '時間（1〜255 × 0.1秒）', 1, 255, 'パルス幅', 'パルス幅（1〜255）', 1, 255],
	[1, 'リミットスイッチ', 112, 1, 'リミットスイッチが押されるまで以前の状態を続ける。'],
	[1, 'ブロックはじめ', 81, 2, '引数のブロック番号（1〜127）を宣言し「ブロックおわり」までの間にプログラムを書く。', 'ブロック番号', 'ブロック番号（1〜127）', 1, 127],
	[1, 'ブロックおわり', 113, 1, 'ブロックの終わりを宣言する。'],
	[1, 'ブロック実行', 82, 2, '引数のブロック番号（1〜127）を呼び出す。', 'ブロック番号', 'ブロック番号（1〜127）', 1, 127],
	[1, 'ブロック繰り返し', 106, 3, '第1引数のブロック番号を第2引数の回数（0〜255）を繰り返す。回数が0の場合は無限に繰り返す。', 'ブロック番号', 'ブロック番号（1〜127）', 1, 127, '回数', '回数（0〜255）', 0, 255],
	[1, 'ブロック脱出', 114, 1, 'ブロック内から強制的に抜け出す。'],
	[1, 'アンカー', 83, 2, '引数のアンカー番号（1〜127）を宣言。', 'アンカー番号', 'アンカー番号（1〜127）', 1, 127],
	[1, 'ジャンプ', 84, 2, '引数のアンカー番号（1〜127）にジャンプ。', 'アンカー番号', 'アンカー番号（1〜127）', 1, 127],
	[1, '入力なしジャンプ', 109, 3, '第1引数のアンカー番号（1〜127）に第2引数の入力ポート（1〜4）が離れていたらにジャンプする。', 'アンカー番号', 'アンカー番号（1〜127）', 1, 127, '入力ポート', '入力ポート（1〜4）', 1, 4],
	[1, '入力ありジャンプ', 108, 3, '第1引数のアンカー番号（1〜127）に第2引数の入力ポート（1〜4）が接続されていたらにジャンプする。', 'アンカー番号', 'アンカー番号（1〜127）', 1, 127, '入力ポート', '入力ポート（1〜4）', 1, 4],
	[1, 'サーボ', 107, 3, '第1引数のパルス幅（30〜255）を第2引数のサーボ（1〜6）にセット。', 'パルス幅', 'パルス幅（30〜255）', 30, 255, 'サーボ', 'サーボ（1〜6）', 1, 6],
	[1, 'ポート出力', 110, 3, '第1引数（0〜255）× 0.1秒秒だけ第2引数のデータ（0〜255）をポートに出力する。', '時間', '時間（0〜255 × 0.1秒）', 0, 255, 'データ', 'データ（0〜255）', 0, 255],
	[0, 'CMD', 85, 2, '引数の命令Codeを実行。ARG1レジスタが第1引数。ARG2レジスタが第2引数。', '命令Code', '命令Code（0〜255）', 0, 255],
	[0, 'A', 86, 2, 'Aレジスタに引数（0〜255）をセット。', '引数', '引数（0〜255）', 0, 255],
	[0, 'IX', 87, 2, 'IXレジスタに引数（0〜255）をセット。', '引数', '引数（0〜255）', 0, 255],
	[0, 'IXM', 88, 2, 'IXの値（0〜11）によって格納されるインデックスメモリに引数（0〜255）をセット。', '引数', '引数（0〜255）', 0, 255],
	[0, 'T1L', 89, 2, 'タイマー1の下位8ビット（0〜255）に引数（0〜255）をセット。', '引数', '引数（0〜255）', 0, 255],
	[0, 'T1H', 90, 2, 'タイマー1の上位8ビット（0〜255）に引数（0〜255）をセット。', '引数', '引数（0〜255）', 0, 255],
	[0, 'ARG1', 91, 2, 'CMD命令で実行される第1引数に引数（0〜255）をセット。', '引数', '引数（0〜255）', 0, 255],
	[0, 'ARG2', 92, 2, 'CMD命令で実行される第2引数に引数（0〜255）をセット。', '引数', '引数（0〜255）', 0, 255],
	[0, 'PA', 93, 2, 'ポートAに引数（0〜255）を出力。', '引数', '引数（0〜255）', 0, 255],
	[0, 'PC', 94, 2, 'ポートCに引数（0〜255）を出力。', '引数', '引数（0〜255）', 0, 255],
	[0, 'ADD', 95, 2, 'Aレジスタ = Aレジスタ + 引数（0〜255）', '引数', '引数（0〜255）', 0, 255],
	[0, 'SUB', 96, 2, 'Aレジスタ = Aレジスタ - 引数（0〜255）', '引数', '引数（0〜255）', 0, 255],
	[0, 'CMP', 97, 2, 'Aレジスタと引数（0〜255）と比較しZ（ゼロ）フラグとC（キャリー）フラグ を変化させる。', '引数', '引数（0〜255）', 0, 255],
	[0, 'AND', 98, 2, 'Aレジスタ = Aレジスタ AND 引数（0〜255）', '引数', '引数（0〜255）', 0, 255],
	[0, 'OR', 99, 2, 'Aレジスタ = Aレジスタ OR 引数（0〜255）', '引数', '引数（0〜255）', 0, 255],
	[0, 'XOR', 100, 2, 'Aレジスタ = Aレジスタ XOR 引数（0〜255）', '引数', '引数（0〜255）', 0, 255],
	[0, 'JZ', 101, 2, 'Z（ゼロ）フラグが真（セット）ならアンカー番号（1〜128）のアンカー番号にジャンプ。', 'アンカー番号', 'アンカー番号（1〜128）', 1, 128],
	[0, 'JNZ', 102, 2, 'Z（ゼロ）フラグが偽（クリア）ならアンカー番号（1〜128）のアンカー番号にジャンプ。', 'アンカー番号', 'アンカー番号（1〜128）', 1, 128],
	[0, 'JC', 103, 2, 'C（キャリー）フラグが真（セット）ならアンカー番号（1〜128）のアンカー番号にジャンプ。', 'アンカー番号', 'アンカー番号（1〜128）', 1, 128],
	[0, 'JNC', 104, 2, 'C（キャリー）フラグが偽（クリア）ならアンカー番号（1〜128）のにジャンプ。', 'アンカー番号', 'アンカー番号（1〜128）', 1, 128],
	[0, 'AIX', 115, 1, 'Aレジスタの値をIXレジスタにセット。'],
	[0, 'AIXM', 116, 1, 'Aレジスタの値をIXMにセット。'],
	[0, 'AT1L', 117, 1, 'Aレジスタの値をタイマー1の下位8ビットにセット。'],
	[0, 'AT1H', 118, 1, 'Aレジスタの値をタイマー1の上位8ビットにセット。'],
	[0, 'AARG1', 119, 1, 'Aレジスタの値をARG1にセット。'],
	[0, 'AARG2', 120, 1, 'Aレジスタの値をARG2にセット。'],
	[0, 'APA', 121, 1, 'Aレジスタの値をポートAに出力。'],
	[0, 'APC', 122, 1, 'Aレジスタの値をポートCに出力。'],
	[0, 'IXA', 123, 1, 'IXレジスタの値をAレジスタにセット。'],
	[0, 'IXMA', 124, 1, 'IXMの値をAレジスタにセット。'],
	[0, 'T1LA', 125, 1, 'タイマー1の下位8ビットの値をAレジスタにセット。'],
	[0, 'T1HA', 126, 1, 'タイマー1の上位8ビットの値をAレジスタにセット。'],
	[0, 'ARG1A', 127, 1, 'ARG1の値をAレジスタにセット。'],
	[0, 'ARG2A', 128, 1, 'ARG2の値をAレジスタにセット。'],
	[0, 'PAA', 129, 1, 'ポートAの値をAレジスタにセット。'],
	[0, 'PCA', 130, 1, 'ポートCの値をAレジスタにセット。'],
	[0, 'CLA', 131, 1, 'Aレジスタをゼロにする。'],
	[0, 'CLIX', 132, 1, 'IXレジスタをゼロにする。'],
	[0, 'CLIXM', 133, 1, 'IXMをゼロにする。'],
	[0, 'CLT1L', 134, 1, 'タイマー1の下位8ビットをゼロにする。'],
	[0, 'CLT1H', 135, 1, 'タイマー1の上位8ビットをゼロにする。'],
	[0, 'CLARG1', 136, 1, 'ARG1をゼロにする。'],
	[0, 'CLARG2', 137, 1, 'ARG2をゼロにする。'],
	[0, 'CLPA', 138, 1, 'ポートAにゼロを出力する。'],
	[0, 'CLPC', 139, 1, 'ポートCにゼロを出力する。'],
	[0, 'INCA', 140, 1, 'Aレジスタ = Aレジスタ + 1'],
	[0, 'INCIX', 141, 1, 'IXレジスタ = IXレジスタ + 1'],
	[0, 'INCIXM', 142, 1, 'IXM = IXM + 1'],
	[0, 'INCARG1', 143, 1, 'ARG1 = ARG1 + 1'],
	[0, 'INCARG2', 144, 1, 'ARG2 = ARG2 + 1'],
	[0, 'DECA', 145, 1, 'Aレジスタ = Aレジスタ - 1'],
	[0, 'DECIX', 146, 1, 'IXレジスタ = IXレジスタ - 1'],
	[0, 'DECIXM', 147, 1, 'IXM = IXM - 1'],
	[0, 'DECARG1', 148, 1, 'ARG1 = ARG1 - 1'],
	[0, 'DECARG2', 149, 1, 'ARG2 = ARG2 - 1'],
	[0, 'ADDIX', 150, 1, 'Aレジスタ = Aレジスタ + IXレジスタ'],
	[0, 'ADDIXM', 151, 1, 'Aレジスタ = Aレジスタ + IXM'],
	[0, 'ADDT1L', 152, 1, 'Aレジスタ = Aレジスタ + タイマー1の下位8ビット'],
	[0, 'ADDT1H', 153, 1, 'Aレジスタ = Aレジスタ + タイマー1の上位8ビット'],
	[0, 'ADDARG1', 154, 1, 'Aレジスタ = Aレジスタ + ARG1'],
	[0, 'ADDARG2', 155, 1, 'Aレジスタ = Aレジスタ + ARG2'],
	[0, 'SUBIX', 156, 1, 'Aレジスタ = Aレジスタ - IXレジスタ'],
	[0, 'SUBIXM', 157, 1, 'Aレジスタ = Aレジスタ - IXM'],
	[0, 'SUBT1L', 158, 1, 'Aレジスタ = Aレジスタ - タイマー1の下位8ビット'],
	[0, 'SUBT1H', 159, 1, 'Aレジスタ = Aレジスタ - タイマー1の上位8ビット'],
	[0, 'SUBARG1', 160, 1, 'Aレジスタ = Aレジスタ - ARG1'],
	[0, 'SUBARG2', 161, 1, 'Aレジスタ = Aレジスタ - ARG2'],
	[0, 'CMPIX', 162, 1, 'AレジスタとIXレジスタと比較しZ（ゼロ）フラグとC（キャリー）フラグ を変化させる。'],
	[0, 'CMPIXM', 163, 1, 'AレジスタとIXMと比較しZ（ゼロ）フラグとC（キャリー）フラグ を変化させる。'],
	[0, 'CMPT1L', 164, 1, 'Aレジスタとタイマー1の下位8ビットと比較しZ（ゼロ）フラグとC（キャリー）フラグ を変化させる。'],
	[0, 'CMPT1H', 165, 1, 'Aレジスタとタイマー1の上位8ビットと比較しZ（ゼロ）フラグとC（キャリー）フラグ を変化させる。'],
	[0, 'CMPARG1', 166, 1, 'AレジスタとARG1と比較しZ（ゼロ）フラグとC（キャリー）フラグ を変化させる。'],
	[0, 'CMPARG2', 167, 1, 'AレジスタとARG2と比較しZ（ゼロ）フラグとC（キャリー）フラグ を変化させる。'],
	[0, 'ANDIXM', 168, 1, 'Aレジスタ = Aレジスタ AND IXM'],
	[0, 'ORIXM', 169, 1, 'Aレジスタ = Aレジスタ OR IXM'],
	[0, 'XORIXM', 170, 1, 'Aレジスタ = Aレジスタ XOR IXM'],
	[0, 'RLA', 171, 1, 'AレジスタをC（キャリー）フラグを通して1ビット左に回転します。'],
	[0, 'RRA', 172, 1, 'AレジスタをC（キャリー）フラグを通して1ビット右に回転します。'],
	[0, 'CLC', 173, 1, 'C（キャリー）フラグをクリア'],
	[0, 'STC', 174, 1, 'C（キャリー）フラグをセット'],
];

