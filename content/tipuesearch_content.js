var tipuesearch = {"pages": [{'title': 'home', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'home.html'}, {'title': 'weeks', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'weeks.html'}, {'title': 'week2-5', 'text': '1.git clone自己的cad2019倉儲 \n 2.git submoudle add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 3.python -m pip install flask_cors \n week3 \n solvespace編譯 \n 1. Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe。 \n 2.查驗github版本(2.13以上)。 \n 3. \xa0git clone\xa0 --recurse-submodules。 \n 4.編輯cmakelist內之713及714行(加入#字號)。 \n 5. cd solvespace>cd extlib>cd libpng>mkdir build>cd build。 \n 6.執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make。 \n 7.進行 \xa0libpng.dll.a 更名, 更名名為 libpng_static.a。 \n 8.回到 solvespace 原始碼目錄,建立 build 目錄後進入 build 目錄。 \n 9.在一次執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make。 \n \n week4 \n 趕上先前的進度 \n Week5 \n solvespace繪圖練習 \n 1.運用左方工作區繪製出長方形。 \n 2.點選線並且運用快捷鍵D標註尺寸如:長度40 寬度30。 \n 3.繪製長方形參照線，點選線後運用快捷鍵G即可以繪製出綠色參照線。 \n 4.繪製圓形孔，繪製完後四個孔之孔徑均不相同。 \n 5.按下兩孔並且用快捷鍵Q使其孔徑一致其他孔也是一樣方式。 \n 6.運用前述的快捷鍵D標註孔之尺寸。 \n 7.運用SHIFT加X使其拉伸並且輸入想要的厚度。 \n 8.若要看正視圖可以使用W，W判定的標準是以游標最接近的面去做正視。 \n 9.若要看到等角圖則可以使用F3使其回到等角圖的樣子。 \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': 'week6 \n 畫自走車模型 \n \n v-rep模擬 \n 1.從下載下來的web_vrep2中app.py用編輯器開啟 \n 2.從下載下來的路徑V-REP3\\V-REP_PRO_EDU中找到vrep.exe \n 3.用v_rep中的file的open scene將下載下來的web_vrep2中two_wheeler.ttt打開 \n 4.剛剛編輯器開啟之app.py使用編輯器的tool中的go將其控制器開啟 \n 5.使用 localhost: 5000 將控制器開啟 \n 6.運用控制器的前後左右測試是否可以控制車子 \n 7.v-rep必須要將右上方開始鈕按下 \n \n v-rep加入start跟stop鍵 \n 1.將mde_course打開 \n 2.用編輯器開啟 templates 中的 controls.html \n 3.在第19行打上從下方向左按鈕指令複製來的指令並且將其改寫成start和stop \n 4.因為有start和stop兩個按鈕所以必須要放置兩行指令 \n 指令: <td><a class="pure-button pure-button-primary" href="/do/start">start</a></td><a class="pure-button pure-button-primary" href="/do/stop">stop</a></td> \n 5.結束後儲存並且用上方tool中的go測試是否已將按鈕放入 \n 6.用編輯器開啟 vrep_linefollower 定義其中開始和結束按鈕 \n 指令: if direction == \'start\': vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot) elif direction == \'stop\': vrep.simxStopSimulation(self.clientID, vrep.simx_opmode_oneshot) else : \n 7.到課程網站中的老師倉儲中尋找issue \n 8.其中有一項issue為置入start和stop按鈕的指令 \n 9.複製並且依照影片中將其貼上 \n 10.在每行指令前定義好所需的指令例如:(if else elif) \n 11.打開 vrep.exe 並且用編輯器打開 app.py 並執行tool中的go \n 12.測試是否有成功運行 \n \n week7 \n solvespace編譯-更改help-about \n 1.開啟solvespace.cpp找到952行在solvespace後方加上compiled by 自己的學號 \n 2.刪除舊的這個路徑中201906_fall\\tmp\\solvespace\\build\\src\\CMakeFiles的solvespace.cpp.obj檔，此檔案若無刪除solvespace就只會讀取這個舊有的檔案 \n 3.進入solvespace資料夾中的這個資料夾用指令cd build \n 4.在黑窗中打上mingw32-make \n 5.開啟solvespace \n 6.在help中的about是否有compiled by 自己學號 \n \n \n slovespace繪圖驗證 \n \n \n week8 \n \n 建立webot開啟檔案: \n (1)將mde.tw中的 Webots_2019b_rev1.7z \n (2)將start_mdecourse.bat檔複製一份並且貼上 \n (3)將 start_mdecourse.bat名稱更改為start_mdecourse -webot.bat檔 \n (4)依照影片把這行指令貼入path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin \n (5)確定路徑是正確的webot檔案應該在Y:\\201906_fall\\data中 \n (6)開啟webot開啟檔也就是start_mdecourse -webot.bat \n (7)開啟webot中的open sample world測試是否可以導入 \n \n \n \n 開啟網誌: \n (1)將leo edit開起來 \n (2)將config中的pelican.leo丟入leo edit裡面 \n (3)修改影片中有講的路徑中的siteurl更改成自己blog網址 \n (4)依照影片中的步驟將指令複製並在黑窗中執行 \n \n \n \n week9 \n \n 期中報告 \n \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': 'week13 \n webot tutorial1 \n \n week14 \n webot tutorial2 \n \n webot tutorial3 \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'NX 12 for Engineering Design', 'text': '在本章中，您將學習如何在NX 12中創建自由曲面。至此，您已經學習了使用“表單特徵”或“草圖繪製”創建模型的不同方法。 \n \n \n \n \n \n \n \n \n \n \n \n \n 7.1 概述 \n 在 NX 12 中，“自由格式功能”選項位於菜單→插入→表面 / 網格表面 / 掃描 / 法蘭表面和菜單→編輯→表面等不同位置，以進行更高級的操作。 \n 7.1.1 從點創建自由特徵 \n 如果您要構造或預先存在的數據僅包含點，則可以嘗試使用以下三個選項之一從給定點構建曲面。 \n 按  Menu,  按 Insert → Surface \n Four Point Surface:  如果您有四個角點。 \n Through Points:  如果這些點形成一個矩形陣列。 \n From Poles:  如果定義的點形成與通過它們的線相切的矩形陣列。 \n \n 7.1.2 通過節字符串創建自由格式特徵 \n 如果構造幾何包含連接對象（曲線和邊）的字符串，則可以使用以下兩個選項之一來創建自由曲面。 \n 按  Menu,  按  Insert → Mesh Surface \n Ruled:  如果您有兩個大致平行的字符串 \n Through Curves: 如果三個或更多字符串大致平行。 \n Through Curve Mesh: 如果在每個方向（平行和垂直）上至少有四個弦且至少有兩個弦，則使用此命令。 \n Swept:  如果至少兩個部分字符串大致相同，則使用垂直 \n 7.1.3 從面孔創建自由特徵 \n 如果構造幾何包含圖紙或面，則可以使用以下兩個選項之一來構造自由曲面。 \n Offset Surface:  如果您要偏移面，請使用此選項。 \n Extension:  如果您有邊曲線或曲線，請使用此選項。 \n 7.2 自由格式功能建模 \n 讓我們來進行一些自由結構建模的練習，其中包括結構化點，點雲，曲線和麵。 \n 打開文件 freeform_thrupoints.pr \n 右鍵單擊工具欄，並確保已選中“曲面工具欄” \n \n 您將看到七行點。 \n 選 Insert →Surface →Through Points \n 對話框如下圖所示彈出。 \n Patch Type,\xa0 選 \xa0Multiple \n Closed Along, \xa0 選 \xa0 Neither \n Row Degree and Column Degree, \xa0 都選 \xa0 3. \n 按下 \xa0 OK \n \n \n 下一個對話框將如上圖所示 \n 按 Chain from All \n 選擇最左行的頂部起點和底部終點，如下圖所示 \n \n 點的第一行將突出顯示。 \n 重複相同的過程以選擇點的前四行。 \n 之後，將彈出一個窗口，詢問是否指定了所有點或是否要指定另一行。 \n \n 按  Specify Another Row  直到所有行都被指定的 \n 指定所有行後，選擇“ All Points Specified ” \n 在“ Through Points ”窗口上單擊“ Cancel ” \n 您將看到如下所示的表面。 \n \n 7.2.2 使用點雲建模 \n 打開名為 freeform_cloud.prt 的文件 \n 點雲將如下所示。 \n \n 按 Insert → Surface → Fit Surface \n 將出現以下對話框。 \n \n 單擊屏幕上的，選擇屏幕上的所有點點雲。 \n 在 Fit Direction 下拉菜單中，選擇 Best Fit 。 這使點雲坐標係與原始系統匹配 \n 將 U 度和 V 度的默認值更改為 3 \n 按  OK \n 最終表面將如下所示。 \n \n 7.2.3 使用曲線建模 \n 打開名為 freeform_thrucurves_parameter.prt 的文件 \n 曲線如下圖所示 \n \n 按下 \xa0Insert → Mesh Surface → Through Curves \n 選擇第一個 section string ，如下所示。 確保選擇圓弧左側的某個位置。 \n 方向矢量顯示在字符串的末尾。 \n \n 單擊鼠標中鍵 MB2 或單擊 Add New Set \n 單擊與第一個相似的下一條曲線，然後單擊鼠標中鍵MB2。 您可以看到兩條 \n 曲線之間生成的曲面，如下圖所示 \n \n 重複相同的過程以選擇其餘的字符串。 選擇每條曲線後，請記住單擊 MB2 （或“ Add New Set ”） \n Alignment,  按  Parameter \n Patch Type,  按  Single \n Construction,  按  Simple \n 當選擇“簡單”選項時，系統將嘗試構建盡可能簡單的表面並最小化面片的數量。 \n 按 OK \n \n 7.2.4 使用曲線和面建模 \n 打開名為 freeform_thrucurves_faces.prt 的文件 \n \n 曲線和面將如上圖所示 \n 按  Insert →Mesh Surface →Through Curves \n 選擇頂面的 edge1 \n 選擇 edge-2 ，然後單擊 MB2 \n 選擇 edge-3 \n 在對話框的“ Alignment ”部分下，取消選中“ Alignment ”複選框 \n 您將在屏幕上顯示以下形狀。 \n \n 確保所有箭頭都指向相同的方向（如果不是，請雙擊任意一個箭頭以反轉其方向）。 \n 在“ Alignment ”對話框中，選擇“ Parameter ” \n 在“ Continuity ”對話框的“ for First Section ”中，選擇“  G2 （ Curvature) ”選項，然後選擇頂面的兩個色塊。 \n 按  APPLY \n \n 現在選擇 edge-3 ，然後單擊 MB2 \n 選擇下平面的三個邊緣 \n 在“ for First Section ”的“ Continuity ”對話框中將選項更改為 G2 （ Curvature ） \n 選擇剛創建的表面，然後單擊 MB2 。 \n 對於“ Continuity ”的 ”Last Section” ，選擇“  G2 （ Curvature ）”，然後選擇底部的三個色塊作為參考 \n 單擊 OK 退出 \n 最終的自由曲面應如下所示 \n 7.3 練習 \n 7.3.1 曲線練習 \n \n 上圖顯示了使用點作為“ Control Point ”或“ Through Points ”創建的三個曲線。 下表列出了每個曲線的對應點和建模類型。 \n \n （a）在Curve-1和Curve-2之間創建直紋曲面。 \n （b）沿+ Y方向拉伸Curve-3以創建參考曲面。 然後在Curve-2和Curve-3之間創建曲面，該曲面應與剛拉伸的參考曲面具有G1（切線）連續性。 \n 提示：您可以將這些點從文本文件導入NX。 首先，將點坐標保存到文本文件中。 然後，使用“NX File" -> "Import" -> "Points from File"將其導入。 \n 7.3.2 表面練習 \n \n 給定 2 個點集，這些點集存儲在“  Fit curve.pts ”和“  Fit surface.pts ”文件中（在文件夾中）。 \n （ a ）將這兩組點導入 NX 。 （上圖顯示了預期的結果） \n （ b ）根據“  Fit curve.pts ”文件中的點創建樣條曲線。 您可以使用“ Fit Curve ”來創建它，調整“ Degree ”和“ Segments ”以獲得更好的擬合。 \n （ c ）根據“  Fit surface.pts ”文件中的點創建自由曲面。 您可以使用“ Fit Surface ”來創建它，調整“ Degree ”和“ Patches ”的數量以獲得更好的擬合度。 \n （ d ）使用樣條曲線作為邊界沿 Z 方向修剪自由曲面。 預期結果類似於計算機鼠標的上表面。 \n 7.3.3 設計計算機鼠標 \n 對與以下所示類似的計算機鼠標進行建模（可以隨意搜索更多圖像作為參考），或者您可以提出一種新的設計然後對其進行建模。 \n \n 7.3.4 設計運動水壺 \n 設計運動水壺，並使用 NX （曲線和曲面）中的自由形狀功能對其建模。 \n \n cad_history第18章 \n cad_history第19章 \n cad_history第20章 \n \n', 'tags': '', 'url': 'NX 12 for Engineering Design.html'}, {'title': 'cad_history第18章', 'text': 'SolidWorks的靈感來自於Jon Hirschtick的靈感。 \n 1983 年從麻省理工學院獲得機械工程學位，隨後在麻省理工學院 CAD \n David Gossard 博士領導的 CAD 實驗室 工作 。 \n 1987 年，他與 Axel Bichara 聯手為新的 CAD 撰寫了商業計劃書 \n 他們稱為 Premise 的軟件公司。 \n 計劃書是在 1987 年 5 月中旬提交的，一個多月以來，兩位創始人從哈佛管理公司獲得了 150 萬美元的風險投資。 該公司設立在劍橋。 \n Premise 的第一個軟件產品 DesignView 是一種二維概念設計工具，可在與 IBM 兼容的 PC 上運行，並與 Word 和 Excel 等 Microsoft 軟件包接口。 用戶可以繪製幾何圖形，約束並定義尺寸關係。使用者可透過 EXCEL 更改尺寸。每套以 1895 美元售出。 \n 儘管該軟件取得了成功，但 DesignView 的市場太小， Premise 難以繁榮。  1991 年春季， Computervision 收購了 Premise 和 DesignView 軟件，目的是將 DesignView 作為其自己的 CADDS 5 軟件的概念性前端進行營銷。 \n Winchester Design入門 \n Hirschtick 於 1993 年 8 月離開 Computervision ，但除了經營自己的公司外，對下一步的工作一無所知。 到 1994 年 1 月，基於實體建模技術創建低成本桌面設計系統的想法開始出現。  Hirschtick 組成了一個由 Bob Zuffante ， Scott Harris ， Constantine Dokos ， Tommy Li 和他本人組成的團隊，他們開始開發最終成為 SolidWorks 的產品。 \n 創始人決定放棄早期的外部資金，並在 1994 年的大部分時間裡無償工作。 \n 團隊的重要成員是 Michael Payne ，他加入了該小組於 1994 年 8 月管理整個軟件開發工作。  Payne 曾經 PTC 的三號員工，在他離開公司時曾擔任開發部副總裁 \n 幾個月前因管理糾紛。 在加入 PTC 之前，他曾擔任 CAD 總監 Prime Computer 的開發。 認識赫希提克和佩恩的人可能無法設想出另外兩個截然不同的人格，但他們確實起作用在接下來的六年中有效地合作。 該公司最初被稱為溫徹斯特設計系統公司（ Winchester Design Systems ）的名字來自他們的第一個實際辦公室雷自溫斯撤。 \n 有了 Payne ，該公司認為現在是時候獲得外部資金了。 赫希提克一直與比沙拉（ Bichara ）在這個問題上緊密合作，比沙拉後來回到波士頓，並在當地的風險投資公司 Atlas Venture 工作。 很快，另外兩家風險投資公司，北橋風險投資公司和 Burr ， Egan ， Deleage ＆ Company 就加入了 Atlas Venture ，這三家公司提供了大約 450 萬美元的資金。這項投資使該公司一直運作到 1995 年年底，直到同一家風險投資公司 久保田公司和其他投資者一起向公司投資了 920 萬美元。 作為後者投資的一部分，久保田成為該公司在日本的分銷商。 \n 正如在第 16 章中討論的那樣，成立於 1984 年的 Parametric Technology Corporation 之所以成功，部分原因是它不必像競爭對手那樣支持傳統的微型計算機和基於大型機的軟件。  PTC 從一開始就開發了 Pro / ENGINEER ，並將其託管在聯網的 UNIX 工作站上。 它的軟件是用高級語言編寫的，並且系統利用了最新的軟件體系結構技術。 但是，由於 PTC 承諾支持多個 UNIX 平台，因此即使 PTC 在其可以使用特定於平台的操作系統代碼來實現用戶界面和文件管理任務的範圍上也受到了限制。 \n 赫希提克的計劃非常簡單。  SolidWorks 將僅在 Windows 的 PC 上運行，該公司計劃將標準 Windows 功能用於盡可能多的系統功能。 結果是該程序具有與 Microsoft 自己的應用程序（包括 Word 和 Excel ）相同的 Windows 外觀。 這種方法大大減少了 Payne 和他的開發團隊必須生產的軟件代碼量。該公司以一套 3,995 美元的價格發行了初始版本。 \n 正如 1995 年 10 月的《計算機輔助設計報告》中所報導的那樣：“此 CAD 軟件與其他軟件的區別在於，這些功能是由用戶控制的。 熟悉 Windows 程序的基礎知識之後，創建和更改零件和裝配體比我們看到的任何其他基於實體的系統都容易得多。 \n 該策略還利用了 PC 世界中發生的變化。 事實證明， Windows NT 和 Windows 95 都受到了用戶社區的廣泛接受，英特爾微處理器的性能正在迅速提高，內存價格下降的速度甚至更快。 結果，具有大容量的快速 PC 內部記憶在經濟上變得越來越有吸引力。 \n SOLIDWORKS早期版本 \n SolidWorks 仍被稱為 Winchester Design ，但在 1994 年底開始悄悄向行業分析家和媒體展示 SolidWorks 軟件的原型。 \n 最初的開發使用了 Spatial Technology 的 ACIS 幾何內核，但是在軟件發布很久之前，由於 ACIS 的性能問題和功能缺陷，該公司改用了 EDS Unigraphics 的 Parasolid 。 \n 該軟件（現在稱為 SolidWorks 95 ）的正式發布會在 1995 AUTOFACT 會議上進行。 從一開始毫無疑問， SolidWorks 的目標市場之一就是正在考慮購買 Pro / ENGINEER 軟件的公司。 當然，另一個競爭是 Autodesk 及其 AutoCAD 軟件。 \n SolidWorks 95 是基於特徵的，尺寸驅動的實體建模器，可直接從實體模型生成二維工程圖。 與 Pro / ENGINEER 一樣，對模型的更改也更改了相關工程圖，反之，對圖形的更改也與模型相關聯。 儘管 SolidWorks 的第一個版本中包含了數量驚人的類似於 Pro / ENGINEER 的功能，但還是存在一些差異。 其中一些涉及建模功能，少數潛在客戶可能會感興趣，而其他一些則本質上更具戰略性。 最初不支持外國起草標準，這減緩了軟件在國際上的接受度。 \n 另一方面， SolidWorks 95 的初始實現包含通常與更昂貴的高端系統相關的功能。 這包括命名特定特徵的能力，而不僅僅是對其進行編號；使用未被完全約束的草圖的能力；以及使用相同特徵對特徵進行重新排序的能力。 \n 一種技術是用來重組文件夾內或文件夾之間的 Windows 文件。 6 模型可以合併維之間的代數關係，以便更改一個維可以更改一個或多個其他維。 新方案吸引潛在客戶的其他方面是： \n \n 與 Windows 95 和 Windows NT 兼容的圖形用戶界面 \n 自動應用約束的草繪器 \n 啟用 OLE 2.0 的文件，用於與其他應用程序交換模型數據 \n 基於 D-Cubed 的 DCM 軟件的約束管理器 \n 只需選擇特徵並將其拖動到 \n \n 一個新的位置 \n \n 用戶使用以下命令創建自己的宏命令的能力 \n \n BASIC 編程語言 \n SolidWorks 95 轟動一時。 新軟件產品的大多數初始發行版都存在嚴重的功能缺陷，並且有太多的錯誤妨礙了生產性工作的完成。  SolidWorks 95 並非如此。根據《計算機輔助設計報告》：“我們很高興地報告， SolidWorks 是我們見過的最優秀的（可能是迄今為止最好的） CAD 軟件產品之一。” 進一步強調軟件的建模功能，特別是其“功能管理器”，該功能使用戶可以更改在 SolidWorks 術語中重新生成或“重建”模型的順序。在查看模型的同時，用於創建設計的元素的嵌套列表顯示在屏幕的側面。 \n 早期軟件存在一些問題，尤其是在裝配建模和工程圖製作領域。 裝配建模功能受到一定限制，如果不小心，可以將一個零件插入另一個零件。 雖然起草被認為是一個良好的開端，但存在許多限制 \n 所需的解決方法。  CAD 報告也對中端 PC 的整體性能感到失望，尤其是在使用下述 PhotoWorks 進行真實感渲染方面。 缺乏文檔或缺乏文檔也是一個令人擔憂的問題。 8 這些投訴中的大多數都是可以預期在該軟件的下幾個版本中得到糾正的類型，並且大多數情況下都是這樣。 \n \xa0 \n 跳上潮流 \n 相當早的時候， SolidWorks 就向其他 CAD 行業明確表示，它不會建立直接的銷售隊伍來與經銷商競爭。 \n 最早的應用程序之一是由英國謝菲爾德的 LightWorks Design 開發的逼真的渲染包 PhotoWorks 。 它由 SolidWorks 出售，價格為 795 美元，或者客戶可以購買 SolidWorks 和 LightWorks 的組合，價格為 $ 4,390.9 ，到 1996 年中， SolidWorks 已與 55 個第三方軟件開發人員簽署了合作夥伴協議，其中有 7 個已經發布了 SolidWorks 兼容軟件包。 \n SolidWorks快速發展 \n SolidWorks 96於1996年7月發布，它修復了上述許多早期問題。 特別是，裝配建模得到了極大的增強。 用戶現在可以在裝配模式下設計和編輯單個零件。 通過允許用戶加載子集，提高了有關大型裝配的性能 \n 他們希望使用的模型。 通過為用戶提供對單個視圖的放置的更多控制以及使用三種不同的線寬和多種文本字體的功能，還改善了草稿編制 \n 裝配橫截面的效果比該軟件的初始版本要好得多。 文檔得到了顯著改善，渲染性能更加令人滿意。 還有一些缺陷尚未解決，例如缺少重做功能以及無法停止長時間操作（例如錯誤加載大型模型）。 \n 不到一年後，據該公司介紹，SolidWorks 97推出了175個增強功能。 該軟件版本包含許多增強功能，並糾正了與前兩個版本相關的問題。 基本包裝中包含了新的鈑金設計功能，以及將凸起的文本添加到零件的平坦表面的功能。 薄殼物體現在可能具有不止一個厚度。 \n SolidWorks還增強了該軟件進行裝配建模的能力及其繪圖功能。 儘管該軟件仍然存在一些嚴重的問題，並且在線文檔還有很多不足之處，但是自SolidWorks首次交付以來的14個月中，它已得到了很大的改進。 實際上，功能的快速增長開始引起一些行業分析師的關注。 史蒂夫·沃爾夫（Steve Wolfe）在1997年2月的《計算機輔助設計報告》中對此進行了介紹。 \n “ ..當SolidWorks擴展其軟件功能時，它將運行 \n 冒著使大多數設計師難以學習的風險。 對於價格昂貴且僅由經驗豐富的專家使用的產品而言，這種複雜性可能是正確的，但對於試圖擴大3D設計人員基礎的產品卻沒有這種複雜性。 \n “ SolidWorks經理和用戶要思考的第二個問題是 \n 哪些功能屬於基本產品，哪些應包含在特殊應用中。 鈑金設計的添加就是一個很好的例子。 並非所有產品都包含鈑金。 在基本產品中增加鈑金開發使其變得更加複雜。 在SolidWorks 97中，鈑金設計控件很簡單，不會給您帶來麻煩。 但是，隨著鈑金設計人員要求更高的自動化程度，複雜性將增加，用戶界面也將變得混亂。 如果添加其他製造應用程序，SolidWorks的複雜性將以幾何方式增長。” \n 同時，Parametric Technology Corporation與SolidWorks之間的口水戰開始升溫。 正如第16章所討論的那樣，PTC首席執行官Steve Walske並不認為真正被稱為“中端” CAD解決方案的市場存在。 在1997年初的一次分析師會議上，沃爾斯克評論說： \n “低端產品存在缺陷，因為它們無法設計機械市場的重要部分。” 13幾年前可能如此，但到1997年，情況已不再如此。 \n \n \xa0 \n 達索系統公司收購SolidWorks \n Dassault Systems於1997年6月24日宣布，它以3億美元的價格收購了SolidWorks，這一舉動使沒有參加討論的所有人感到驚訝。 \n Dassault Systems於1997年6月24日宣布，它以3億美元或大約是該公司年收入的12倍收購SolidWorks，這一舉動使所有不參與討論的人感到驚訝。 在深夜的巴黎電話中，喬恩·赫希提克（Jon Hirschtick）提醒我，在不到兩年前的《工程自動化報告》中有關公司的第一篇文章中，我曾於1995年10月寫道：“ SolidWorks將對機械設計產生最重大的影響 市場近十年來。” 我幾乎沒有想到這種影響會如此之快。 在過去的25年中，CAD / CAM行業進行了許多收購，幾乎全部 \n 讓一家公司陷入被更強大的參與者收購的麻煩中。 這是最早涉及兩家實力雄厚的公司合併的公司之一。 \n 在發布之時，SolidWorks已售出約6,000份軟件。有關收購的幾點要點立即闡明。首先，也是最重要的一點，SolidWorks將繼續作為一個獨立的組織來控制自己的產品開發策略。其次，SolidWorks軟件包將繼續通過現有的經銷商渠道出售，而不是由銷售達索（Dassault）大部分CATIA軟件的IBM出售。第三，SolidWorks將繼續與第三方軟件供應商合作。十年後，這仍然成立。 CAD行業中大多數收購的結果範圍從差到可怕。事實證明，為了擴大客戶群而進行收購是錯誤的。達索（Dassault）對SolidWorks的收購似乎從一開始就奏效了，因為兩家公司之間幾乎沒有市場重疊。 \n 達索繼續保持這種狀態。達索（Dassault）的CAD業務通常涉及大型工業問題，例如波音和克萊斯勒，它們與IBM有長期合作關係，如第13章所述。當時，Dassault沒有Windows版本的CATIA，這是SolidWorks支持的唯一平台。此外，由於SolidWorks公司更專注於Pro / ENGINEER和AutoCAD，因此沒有與CATIA競爭的心態。多年來，儘管達索和SolidWorks之間進行了適度的技術共享，但在大多數情況下，公司的兩個部門仍在繼續各自發展。即使在Dassault於2000年收購Spatial及其ACIS技術之後，SolidWorks仍然使用Parasolid幾何內核。財務等核心業務功能被集中化，而與客戶相關的活動（包括產品內容和方向）得到獨立管理。 \n 與Autodesk競爭 \n Autodesk的請願書1998年初也是SolidWorks與Autodesk之間更激進的營銷戰的開始。 總體而言，在Autodesk努力合理化其機械產品戰略的同時，SolidWorks在技術和市場方面均處於發展之中。 在維克·萊文塔爾（Vic Leventhal）的領導下，SolidWorks與許多經銷商（無論以前還是現在的Autodesk經銷商）建立了令人印象深刻的分銷渠道。 \n Autodesk在1998年初宣布，授權攜帶Mechanical Desktop的經銷商也不能銷售競爭性產品，尤其是SolidWorks。 隨後，包括美國CAD和Micro Engineering Solutions在內的幾家主要經銷商被Autodesk終止。 \n 大約在同一時間，1998年2月，SolidWorks成為OpenDWG Alliance（今天稱為The Open Design Alliance）的創始成員。 該行業小組的目的是提供有助於直接閱讀和閱讀的軟件工具。 \n 使用Autodesk的內部DWG格式編寫AutoCAD文件。 \n Autodesk從未發布過DWG格式的詳細說明。 結果，與聯盟簽約的程序員被迫對文件格式進行逆向工程。 通過加入該聯盟，主要希望能夠快速讀取AutoCAD文件的Autodesk競爭對手可以在此領域集中開發資源並消除多餘的開發工作。 \n SolidWorks策略的第三方軟件密鑰 \n 在接下來的幾年中，SolidWorks大約每年一次提供新版本的軟件。 在大多數情況下，該公司專注於其核心建模和繪圖技術，而將諸如分析，NC和PDM之類的應用程序留給第三方供應商。 \n \xa0 \n SolidWorks成為嚴肅的設計套件 \n 好的軟件體系結構的一種衡量標準是可以在不對性能或可靠性產生不利影響的情況下增強主要軟件包的速度。 \n SolidWorks 98幾乎可以立即顯示150個零件的裝配體 \n 每個系統都保持著自己的開發重點，並且銷售似乎針對不同的細分市場。 \n 管理部門開始變動 \n 在1999年春季，SolidWorks研究與開發執行副總裁Mike Payne成為達索系統技術執行副總裁。 \n 電子圖紙 \n CAD的擁護者們大概是從1980年代中期開始提議取消傳統的工程圖，並使用模型圖像和數字數據進行建築和製造。 這些先驅者中的大多數人都領先於時代，但是逐漸地，圖紙開始在建模數據方面退居二線。 \n SolidWorks走向成熟 \n SolidWorks 2001可能為這種快速增長的產品定義了新的成熟度。此版本標誌著一種新的用戶界面方法，SolidWorks的市場營銷人員稱之為“關心顧客反應”。 \n 防守改變 \n 在新聞發布會和分析師會議之後的幾天，該公司於2001年11月9日宣布其創始人兼首席執行官Jon Hirschtick決定辭職。 \n SolidWorks進入PDM之戰 \n 到2002年6月，很明顯Dassault Systemes對Smart Solutions的收購未能達到公司預期的效果。 \n 很顯然，SmarTeam是SolidWorks中，大型用戶的首選PDM產品。 \n SolidWorks 在中間十年 \n 在2005年2月上旬，SolidWorks在佛羅里達州的奧蘭多舉行了年度用戶會議，有2200多名與會者。 \n 在2005年中期，SolidWorks用戶每月下載近100,000個零件。 \n', 'tags': '', 'url': 'cad_history第18章.html'}, {'title': 'cad_history第19章', 'text': '麥克唐納-道格拉斯公司自動化 \n 為了了解當今的Siemens PLM Software組織和Unigraphics軟件如何發展，必須回到密蘇里州聖路易斯的一個名為McAuto（McDonnell Automation Company）的組織，該組織是McDonnell Aircraft Corporation的子公司。 \n Unigraphics在北卡羅來納州的實力很強，因為這是聯合計算公司開始的領域，該公司聲稱有1000多個後處理器。 \n 低成本系統 \n 在1980年代初期，CAD / CAM系統供應商對開發成本更低的系統產生了濃厚的興趣，特別是在客戶只想購買一兩個座位的情況下。 \n McAuto最初嘗試提供成本更低的替代方案的是ADS-100（自治設計站），起價為100,000美元（相當於今天的200,000美元）。 \n Unigraphics II在32位數字VAX和Data General MV系統上實現。 \n Unigraphics II的主要缺點是缺乏隱藏線去除功能以及無法生成陰影圖像的能力。 Unigraphics II通常在市場上廣受歡迎。 例如:Continental Can在1984年下半年向一家40工作站系統下了350萬美元的訂單。 \n Unigraphics終端和平台支援 \n 在1980年代初期，Digital and Data General在16位和32位計算機上都支持Unigraphics。 \n 在1980年代後期，該公司減少了對特殊配置的硬件系統的依賴，並開始支持如下所述的行業標準UNIX工作站。 到1990年，該公司已支持Digital，Hewlett-Packard和Sun Microsystems的各種工作站。 \n 麥克唐納-道格拉斯公司和AEC市場 \n McAuto長期以來一直致力於為土木工程用戶提供分時共享服務。 \n 1985年中，McAuto與英格蘭霍舍姆的Moss Systems簽署了一項協議，向該公司推銷該公司的地形建模和公路設計軟件包，也稱為MOSS。 大約在同一時間，Auto-trol Technology還與Moss Systems簽署了分銷協議。 \n IBM作為競爭對手和合作夥伴 \n 儘管IBM在整個CAD市場上與McAuto競爭，但這並沒有阻止該公司與McAuto簽約成為IBM 4361計算機的經銷商。 \n \n \xa0 \n 名字遊戲開始 \n 在過去的25年中，公司的名稱一直改。 \n 1987年初，公司名稱再次更改為McDonnell Douglas製造與工程系統公司，總裁為Clancy。 此後通常簡稱為M＆E。 \n UniSolids和Parasolid \n UniSolids由McDonnell Douglas在1982年初根據羅切斯特大學的PADL（零件和裝配體描述語言）開發。 PADL-1是一個CSG（構造實體幾何）建模器，它通過組合和減去實體圖元來創建實體模型。 \n 跳上PC CAD潮流 \n 1985年10月，麥克唐納·道格拉斯（McDonnell Douglas）宣布了一個新組織，即PC生產力系統（PCPS）部門。 \n Unigraphics II成熟 \n 推出後的第一年半，客戶從Unigraphics I過渡到Unigraphics II的速度很慢。 1985年3月，當公司開始銷售具有改進的性能和可靠性的Unigraphics II版本2.0時，這一轉變開始加速。 2.0版還包括一個機制模塊，改進的NC功能和用於定義默認操作的改進過程。 Unigraphics I的最新完整版本D6.0已於1985年8月交付給客戶。 \n 產品和管理的重大變化 \n 在當年的用戶大會上，該公司宣布了軟件定價方式的重大變化。 到現在為止，該公司已針對每個系統出售了大小不同的軟件，價格不同。 客戶可以在每個系統上運行盡可能多的終端，而終端在計算機上的物理處理能力和用戶滿意的性能水平就可以運行。 新方法對軟件和維護按“每個席位”定價。 許可證管理程序Access Control可以管理被授權使用每個軟件模塊的用戶數量。 \n 通用汽車和EDS改變Unigraphics的未來 \n 1984年6月27日，通用汽車同意以25億美元的價格收購電子數據系統（EDS）。 1984年10月18日，合併完成，EDS成為GM的全資子公司。 \n 此次收購的結果是，通用汽車幾乎所有的數據處理活動，包括大量個人和大量計算機硬件，都轉移到了EDS子公司。 \n Unigraphics成為EDS部門 \n 通用汽車公司的EDS子公司於1991年11月4日以350至4億美元的價格收購了麥克唐納道格拉斯系統集成公司。 \n \n 產品數據管理 \n 該公司的第一個PDM產品是Infomanager，它使用戶能夠查找分佈在網絡中的文件，並促進電子審查，批准和發布圖紙。 最初的版本是在1990年初使用Ingress關係數據庫管理程序發布的。 \n 1990年末的典型價格 \n 以下是每個許可證1990年後期Unigraphics軟件模組的價格： \n \n  Basic Unigraphics II $15,900  \n  Surface Geometry $6,700 \n  UG Concept $9,700 \n  Hidden Line Removal $2,500  \n  Basic NC $7,200  \n  Advanced NC $15,600  \n  GRIP $10,000  \n  Infomanager Server $22,000 \n  Infomanager Client $2,200 \n \n EDS Unigraphics迎接PTC競爭 \n 從 1988 年開始，並在幾年內加快了速度， Parametric Technology 憑藉其 Pro / ENGINEER 軟件（如第 16 章所述）徹底改變了 CAD 行業。 \n EDS之後的AEC活動 \n 當EDS於1991年11月收購McDonnell Douglas的CAD業務時，AEC和製圖活動是作為一個獨立的組織，即EDS / GDS Solutions建立的，獨立於Unigraphics機械集團。 \n 中年的EDS Unigraphics \n 通用汽車公司的EDS子公司收購Unigraphics五年後，許多用戶和行業觀察家對該公司的發展方向仍然感到困惑。 \n 一些人認為Unigraphics的主要興趣只是向GM及其供應商提供設計技術。 其他人擔心，在諮詢情況下，即使不是最適合客戶的EDS也會自動青睞Unigraphics軟件。 這兩種看法都不准確。 \n EDS Unigraphics對擴展其客戶群以涵蓋廣泛的用戶非常感興趣，而EDS的諮詢活動似乎從未涉及Unigraphics，除非涉及通用汽車。 \n \n \xa0 \n EDS Unigraphics擺脫了通用汽車的陰影 \n Unigraphics一生都被大型工業公司（McDonnell-Douglas和通用汽車）的陰影所籠罩。 儘管EDS是一家價值數十億美元的企業，但至少在計算機服務行業中，它的高層管理人員即使對CAD行業沒有類似的了解，也深刻地了解了該業務的動態。 在從通用汽車公司剝離EDS的大約一年後，EDS Unigraphics似乎開始邁向更高的步伐，並取得了自此以來一直保持的勢頭。 \n Parasolid成為公認的組件技術產品 \n 在1990年代初之前，每個CAD軟件供應商都開發了自己的幾何建模核心。 實際上，大多數公司認為這就是使他們與競爭對手區分開來的原因。 Spatial Technology是DassaultSystèmes的子公司，是早期的ACIS產品提供幾何建模軟件的領導者。 不幸的是，ACIS缺乏幾何完整性，新版本的及時性和質量問題。 \n EDS Unigraphics收購鷹圖機械業務部門 \n 1997年10月，EDS和Intergraph宣布他們計劃組建一家新公司，該公司由Intergraph的機械業務部門Unigraphics和少量與支持Unigraphics直接相關的EDS諮詢活動組成。 \n UGS公開上市並完成鷹圖機械收購 \n 在隨後的幾個月中，與Intergraph的計劃交易發生了重大變化。EDS並沒有成立一家合資公司，而是在1998年1月初將EDS Unigraphics重組為一個獨立的企業，稱為Unigraphics Solutions，由John Mazzola擔任總裁兼首席執行官。 \n 對PDM的興趣升溫 \n 到1998年，產品數據管理在UGS中的地位越來越重要。 \n 該公司的主要PDM軟件IMAN具有非常強大的數據體系結構，該體系結構促進了涵蓋分佈式用戶組的解決方案的實施，並且與Unigraphics進行了出色的集成以及處理非UGS數據的能力。 \n \n 21世紀的UGS \n 在2000年6月下旬，約翰·馬佐拉（John Mazzola）宣布他將在UGS和該公司的前身工作35年後，將於2001年初退休。 \n \xa0 \n 添加高端可視化軟件 \n 下一個重大發展發生在2000年9月5日，當時UGS和Engineering Animation Inc.共同宣布兩家公司已達成最終協議，允許UGS以現金要約收購EAI，預計價值約2.05億美元。 \n 收購SDRC和重大企業重組 \n 在2001年5月23日，EDS宣布了一項主要協議，以約9.5億美元的現金或每股25美元的價格收購Structural Dynamics Research Corporation（SDRC）。 與此同時，EDS還計劃購買其UGS子公司14％的股份。 預計UGS股東的報價為每股27美元，約合1.7億美元。 \n 所有權的另外兩個變化 \n 在2003年11月11日，EDS宣布將EDS PLM解決方案稱為UGS PLM解決方案。一個月前，EDS宣布計劃為公司的少數股權進行新的IPO或非公開發行 。 EDS自身的財務問題可能是該公告背後的驅動因素。 \n 在報告了令人失望的2003年財務業績之後，EDS宣布收到了幾方的重大興趣後，正在考慮出售UGS PLM Solutions。 \n', 'tags': '', 'url': 'cad_history第19章.html'}, {'title': 'cad_history第20章', 'text': '湯姆·拉澤爾（Tom Lazear）和VersaCAD \n 湯姆·拉澤爾（Tom Lazear）在獲得理學學士學位後於1957年加入南加州燃氣公司。 加州大學伯克利分校機械工程專業。 他的職位是助理設計工程師，負責管道系統，泵站和類似項目的設計。 之後，他於1959年加入福陸公司，擔任助理計算機工程師。 \n 在南加州天然氣公司和福陸工作期間，Lazear從UCLA獲得了電氣工程碩士學位。 隨著計算機的使用在Fluor公司變得越來越普遍，Lazear成為了這項活動的主要負責人。 1968年，他成為該公司計算機服務總監，這一職位今天可能被稱為CIO。 回到學校並獲得麻省理工學院斯隆管理學院碩士學位後，拉澤爾成為了福陸公司南加州分公司的高級副總裁兼總經理的助理。 他一直擔任該職務，直到1979年他全職加入T＆W Systems為止。 \n 在T＆W Systems的早期 \n T＆W Systems是Lazear和William Yunek於1977年開始的兼職工作。 T＆W的最初工作人員包括湯姆·拉澤爾（Tom Lazear），他的妻子桑迪（Sandy），他的女兒黛比（Debbie）是加州大學爾灣分校（UCI）的學生，以及他的兒子邁克（Mike）是加州州立長灘（CSLB）的新生。 \n 1979年，Lazear退出了Fluor公司，並全職加入T＆W Systems。 對於程序員來說，UCSD-P編程環境有些困難。 Lazear決定將整個編程團隊派往鹽湖城，在那裡他們與猶他大學教授Dick Brant見了兩天。 Brant是使用UCSD-P的專家，並且為Terak系統編寫了許多程序。 他教T＆W程序員如何在Terak上開發圖形應用程序以及如何為該機器構造大型程序。 根據Lazear的說法，“那次旅行帶來了豐厚的回報” \n T-Square軟件主要針對原理圖繪圖應用程序，例如過程圖和儀器儀表圖（P＆ID）。 T＆W Systems作為參展商參加的第一個貿易展覽是1981年秋天的COMDEX，公司在Terak展位上展示了T-Square。 緊隨其後的是1982年春季在芝加哥的A / E / C SYSTEMS。 \n \xa0 \n \xa0 \n T-Square已移植到Apple II \n T＆W對Apple II計算機的T-Square進行了重新編程，並於1982年5月以CADapple的形式推出。 \n 蘋果是一家熱門的計算機公司，當時支持Apple II而不是IBM PC的決定是合乎邏輯的決定。 歷史最終將證明事實並非如此。 一個CADapple系統，包括一台具有48KB內存的Apple II計算機，兩個軟盤，一個用於光標控制的操縱桿，一個Houston Instruments DMP-7繪圖儀和軟件，售價為9,995美元。 平板電腦的價格為1,000美元，而單獨購買該軟件的價格為2,475美元。 到1983年，CADapple成為第一款在Apple II上銷售CAD軟件包，主要競爭對手是Cascade Graphics。 \n 在不到七年的時間裡，CADapple的價格僅為395美元。 \n VersaCAD時代開始 \n 1982年11月，Autodesk在COMDEX上推出了AutoCAD。 儘管未找到早期比較結果，但與當時的AutoCAD相比，CADapple似乎具有更大的功能。 T＆W Systems很快有了其軟件的PC版本。 1983年1月，該公司推出了T-Square軟件，將其重命名為PC的VersaCAD，售價為1,995美元。 它使用了UCSD-P操作系統，並使用了與Terak系統上相同的Pascal代碼。 該公司還提供了軟件，供其他系統供應商進行品牌重塑，包括通過Carrier Corporation為Hewlett-Packard 9863進行的E2000，通過Staedtler Mars的Terak MarsCAD以及通過AT＆T的OmniCAD部門的OmniDRAFT。 Staedtler Mars還將HP9836計算機上的VersaCAD重新出售為MarsCAD。 所有這些系統都使用了UCSD-P操作系統。 \n VersaCAD已移植到MS-DOS \n 到1983年，微軟的MS-DOS顯然已成為首選的個人計算機操作系統。 根據Lazear的說法，VersaCAD的MS-DOS版本於1984年推出，或者晚了大約兩年。 \n \xa0 \n T＆W和VersaCAD開始成熟 \n 該公司在上半年的收入為550萬美元。 \n 截至1986年7月31日的一個會計年度。根據Daratech Associates的數據，該公司在1986年底擁有30,000個用戶，其中包括6000個CADapple席位和1,000個EasyCAD席位。 到1987年初，該公司的產品線包括以下軟件包: \n VersaCAD Designer，其中包括VersaCAD 2-D和VersaCAD \n 3-D-2,995美元（2-D和3-D模塊現在具有一致的用戶界面） \n \n VersaCAD 2-D-$ 2,495（以前稱為VersaCAD Advanced） \n VersaCAD 3-D-995美元（此軟件包需要VersaCAD 2-D，但 \n \n 單獨定價，以便用戶可以從2-D開始然後移至3-D） \n \n 專家符號庫-每個495美元（符號庫可用於機械工程，管道配件，供暖，通風和空調，工業控制，液壓原理圖，建築，地圖以及電氣和電子原理圖） \n VersaData-$ 495 \n VersaMODEL-8,000美元及以上 \n EasyCAD-$ 495 \n CADAPPLE-1,495美元 \n CADAPPLE入門級-99美元（CADapple的功能受限版本 \n \n 用於教育目的） \n 總理收購Versacad \n 1987年10月發生了重大變化，Prime Computer以略低於600萬美元的價格收購了Versacad，其中包括200萬美元的預付款，以及根據VersaCAD產品系列的後續性能得出的餘額。 \n Lazear離開Prime Computer並成立拱門系統 \n 湯姆·拉澤爾（Tom Lazear）於1989年底離開Prime Computer，成立了Archway Systems，最初是提供一種平台，通過該平台Lazear可以向Prime的Computervision部門提供諮詢服務。 一年後，Mike Lazear離開了Computervision，Archway成為了CAD系統的經銷商。 \n \xa0 \n 翡翠森林變身成Pelorus \n Prime收購Versacad的一個鮮為人知的方面是Versacad的一項高級開發項目“ Emerald Forest”與幾年後Computervision發起的一項技術計劃（稱為“ Pelorus”）之間的聯繫。Emerald Forest於1986年在Versacad成立。 旨在應用兩個最新的軟件開發概念，即使用面向對象的軟件技術以及OS-2和Presentation Manager用戶界面的組合。 這是克里斯·斯塔門（Chris Stammen）領導的一項重大工作。 到1987年中期，Stammen及其開發團隊已經建立並運行了原型。 \n Archway重新獲得VersaCAD的權利在1987年底Prime收購VersaCAD之後，Emerald Forest的開發繼續在該公司位於加利福尼亞州Huntington Beach的辦公室進行，但沒有將基於該技術的明確產品引入VersaCAD產品系列中。 被轉移到Prime在加州聖地亞哥的Calma工廠。 公司恢復為Computervision後，該軟件被重命名為Pelorus，並由公司作為新一代CAD開發環境進行銷售。 Computervision試圖將該技術許可給其他軟件公司，並以此為公司自己的應用程序的基礎。Computervision引入的一個這樣的軟件包稱為DesignPost。 它原本是VersaCAD的繼任者，但並未對市場產生太大影響，最終消失了。 \n Archway重新獲得VersaCAD的權利 \n 同時，Archway Systems已成長為備受推崇的AEC和機械設計軟件產品的經銷商。  PTC 在1999年中期通知VersaCAD用戶，從預定的將來日期開始，PTC將停止銷售VersaCAD的其他副本，並且此後僅在很短的時間內提供支持。 Lazear看到了有關VersaCAD的商機，並聯繫了他在Prime / Computervision時代認識的一些人。 他們讓他與PTC首席執行官Steve Walske保持聯繫，經過三個月的法律爭執，他們達成了交易。 \n Macintosh版本的VersaCAD是一種有趣的情況。 儘管VersaCAD是可用於Macintosh平台的少數幾個通用CAD軟件包之一，但PC版本的銷售量超過Macintosh版本的十倍。 從根本上講，蘋果公司在向技術用戶銷售計算機方面仍然做得很差。 使Archway的Macintosh情況復雜化的是，該平台選擇的新操作系統是OSX。 \n \xa0 \n \xa0 \n 為什麼Autodesk贏得這場戰爭 \n 邁克·福特（Mike Ford）加入歐特克（Autodesk）後，與Versacad相比，它變得更加面向營銷，將其資本的很大一部分用於營銷。 Lazear提供的一個示例涉及在加利福尼亞州阿納海姆舉行的早期A / E / C SYSTEMS會議。福特汽車公司在展會開始之前向許多演講者免費贈送了機票，邀請他們參觀位於加利福尼亞州索薩利託的Autodesk。結果，“每個演講者都談到他們在Autodesk上看到的內容。” \n Autodesk建立了更大的經銷商渠道，並且比Versacad更快。 \n Autodesk在支持第三方開發人員和用戶組方面更加主動。 \n Autodesk從一開始就支持MS-DOS，而將VersaCAD從UCSD-P移植到MS-DOS則花費了一些時間。 \n Autodesk向教育機構發放了大量許可，而T＆W Systems繼續向該市場出售軟件。根據Lazear的說法，“我們不願放棄急需的收入。” \n VersaCAD的價格為$ 1,995，然後在基本價格時為$ 2,995美元 ，而autocad則是1000美元。 \n', 'tags': '', 'url': 'cad_history第20章.html'}, {'title': 'week15-18', 'text': 'week15回報 \n', 'tags': '', 'url': 'week15-18.html'}, {'title': '軟體介紹(solidworks)', 'text': '安裝網址 (需登入學校電子信箱) \n \n SOLIDWORKS ® \xa0 應用程式是一套善用熟悉的 Microsoft ® \xa0 Windows ® \xa0 圖形使用者介面的機械設計自動化軟體。 \n 這套易學的工具能讓機械設計工程師快速地繪製出其構想，嘗試運用不同的特徵與尺寸，以及產生模型和細部工程圖。 \n 二次開發性: \n \n Solidworks的軟體開發商為方便各類用戶對其進行二次開發，提供了API(Application Programming Interface )應用編程接口，它是一個基於OLE Automation的編程接口，此接口為用戶提供了自由、開放、功能完整的開發工具，其中包含了數以百計的功能函數，這些函數提供了程式設計師直接訪問Solidworks的能力。API中的函數可以被Visual Basic、C/C++、VBA或者是Solidworks宏文件以及其它支持OLE的開發程序調用，從而可以擴展Solidworks的功能。 \n', 'tags': '', 'url': '軟體介紹(solidworks).html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n week15~18 << \xa0 Previous \xa0 Next \xa0 >> Develop \n \n Copyright ©2019 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': '\n https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n About << \xa0 Previous \n \n \n Copyright ©2019 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n', 'tags': '', 'url': 'Develop.html'}]};