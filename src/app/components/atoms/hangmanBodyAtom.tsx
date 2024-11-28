import { HangmanBodyType } from "@/app/context/hangmanProvider";
import React from "react";


export const HangmanBodyAtom: React.FC<HangmanBodyType> = ({head=false, body=false, leftArm=false, rightArm=false, leftLeg=false, rightLeg=false, face=false}) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 1600 1300">
        
            <path d="M 396.78,259.46 C 356.39,259.44 307.2,259.53 246.02,259.68 L 160.98,259.9 159.53,263.9 C 158.72,266.1 157.21,267.9 156.2,267.9 153.78,267.9 153.82,272.67 156.26,274.17 157.31,274.83 165.38,275.56 174.19,275.79 185.09,276.07 190.69,276.92 191.67,278.51 193.86,282.05 195.65,334.21 194.84,369.64 L 194.12,401.18 188.56,406.96 C 185.49,410.14 181.28,416.55 179.24,421.18 174.77,431.29 176.28,435.68 185.57,439.56 191.62,442.09 191.69,442.12 191.73,454.05 191.93,509.7 193.89,596.33 195.39,614.44 196.62,629.28 196.81,699.6 195.95,826.37 194.86,987.32 194.27,1016.4 192.12,1018.18 190.3,1019.69 173.63,1020.36 133.17,1020.57 102.11,1020.74 75.77,1021.44 74.66,1022.13 73.55,1022.82 72.66,1025.39 72.66,1027.85 L 72.66,1032.35 88.2,1031.12 C 100.25,1030.19 105.99,1030.55 113.85,1032.85 122.43,1035.35 128.44,1035.63 152.93,1034.51 183.78,1033.1 309.57,1033.22 456.34,1034.79 505.68,1035.32 573.23,1035.73 606.44,1035.73 648.71,1035.74 671.37,1036.49 681.94,1038.18 701.91,1041.37 702.71,1041.35 713.02,1038.01 720.62,1035.55 730.41,1035.24 780.52,1035.68 895.83,1036.68 1146.67,1036.24 1158.88,1035.01 1165.72,1034.32 1187.46,1032.83 1207.23,1031.74 1238.08,1030.02 1246.89,1030.17 1269.4,1032.68 1288.85,1034.84 1298.37,1035.12 1306.2,1033.85 1312.17,1032.87 1324.54,1032.72 1334.62,1033.46 1360.13,1035.31 1380.78,1034.86 1395.35,1032.12 1405.72,1030.18 1415.47,1030.09 1449.53,1031.85 1472.37,1033.02 1496.55,1034.43 1503.26,1034.96 1513.0,1035.73 1516.69,1035.31 1521.47,1032.74 1527.91,1029.27 1529.13,1024.99 1524.75,1021.35 1522.73,1019.68 1517.16,1019.35 1503.37,1020.13 1490.46,1020.86 1480.59,1020.41 1471.29,1018.63 1463.91,1017.22 1448.32,1016.07 1436.65,1016.07 1419.2,1016.07 1415.25,1015.6 1414.39,1013.35 1413.82,1011.85 1414.6,1009.25 1416.11,1007.58 1420.79,1002.41 1435.0,973.59 1433.38,972.59 1430.16,970.6 1426.66,973.91 1422.94,982.42 1420.82,987.28 1419.11,991.68 1419.11,992.25 1419.11,992.82 1417.47,995.63 1415.45,998.47 1408.97,1007.57 1407.83,1005.2 1409.06,985.09 1409.83,972.6 1409.57,966.11 1408.29,965.31 1404.71,963.11 1402.87,967.61 1401.85,981.2 1401.28,988.66 1400.26,994.75 1399.57,994.75 1397.32,994.75 1392.96,988.62 1391.97,984.09 1388.77,969.53 1381.77,958.53 1378.09,962.2 1375.55,964.75 1382.2,988.19 1390.13,1004.75 1395.16,1015.24 1393.57,1016.66 1373.81,1018.96 1342.88,1022.57 1335.4,1022.62 1333.35,1019.41 1331.96,1017.23 1332.6,1015.1 1336.07,1010.52 1341.31,1003.58 1351.61,983.8 1351.61,980.64 1351.61,979.47 1350.21,978.76 1348.5,979.09 1346.62,979.45 1342.61,985.42 1338.34,994.3 1328.57,1014.64 1326.13,1013.89 1326.96,990.75 1327.5,975.69 1327.16,972.53 1325.02,972.53 1321.72,972.53 1320.03,978.75 1319.8,991.64 1319.71,997.26 1318.87,1001.86 1317.92,1001.86 1315.52,1001.86 1311.25,994.95 1309.7,988.53 1306.85,976.74 1302.06,968.09 1298.38,968.09 1296.39,968.09 1294.77,968.94 1294.77,969.98 1294.77,973.89 1301.52,994.22 1308.31,1010.69 1310.8,1016.72 1310.9,1018.22 1308.81,1020.74 1306.63,1023.37 1303.67,1023.52 1281.45,1022.13 1251.13,1020.23 1214.12,1020.79 1192.63,1023.52 1181.68,1024.9 1119.83,1025.58 996.35,1025.68 847.33,1025.81 813.89,1025.43 803.62,1023.35 796.78,1021.96 783.59,1020.78 774.31,1020.74 730.7,1020.57 634.5,1023.1 615.88,1024.9 599.89,1026.45 588.46,1026.37 566.14,1024.63 533.78,1022.1 521.53,1022.05 468.17,1024.07 443.04,1025.02 426.48,1024.82 416.66,1023.46 405.31,1021.9 293.43,1019.7 221.65,1019.63 212.4,1019.62 211.47,1019.26 209.66,1014.74 207.59,1009.58 207.77,931.5 210.27,754.84 211.31,681.26 211.01,652.21 208.71,606.67 205.32,539.38 204.81,424.27 207.88,418.4 209.0,416.27 217.59,406.11 226.98,395.85 236.36,385.6 247.27,373.64 251.18,369.31 268.97,349.58 283.55,334.37 312.02,305.77 L 342.66,275.01 404.39,275.9 C 589.57,278.6 595.25,278.77 606.67,281.89 610.7,283.0 625.81,284.32 640.25,284.84 654.69,285.36 667.06,286.17 667.78,286.61 668.5,287.06 672.15,286.12 675.89,284.56 680.9,282.46 685.06,282.09 691.65,283.06 704.45,284.94 720.73,285.01 759.65,283.28 L 793.9,281.73 791.96,286.78 C 790.84,289.74 790.26,302.78 790.46,318.44 L 790.79,346.87 808.06,346.09 808.06,314.05 808.06,283.78 812.33,282.17 C 815.02,281.15 819.1,281.24 823.27,282.39 826.92,283.4 833.59,283.64 838.09,282.95 842.58,282.26 883.82,281.18 929.73,280.56 L 1013.22,279.45 1013.72,273.95 C 1014.04,270.63 1013.21,267.6 1011.56,266.23 1009.35,264.4 983.25,264.37 874.22,266.18 733.6,268.51 705.32,268.18 611.77,263.23 560.23,260.51 517.95,259.52 396.78,259.46 z M 237.64,275.23 C 244.28,275.18 252.54,275.19 262.89,275.23 301.15,275.39 312.46,275.96 312.46,277.67 312.46,278.89 308.67,283.3 304.03,287.5 299.38,291.7 277.71,312.39 255.84,333.49 233.98,354.58 214.94,372.1 213.6,372.42 209.6,373.36 209.09,368.77 210.32,344.87 210.97,332.35 211.37,320.9 211.27,319.44 209.33,292.4 209.31,279.91 211.21,277.62 212.56,275.99 217.7,275.37 237.64,275.23 z" id="path3099" style={{fill:"#000000",stroke:"none",strokeWidth:0.99999994}}/>
                
        
            <path d="M 808.05,344.31 813.43,344.31 C 822.23,344.31 840.35,351.31 847.16,357.35 850.65,360.44 855.97,364.97 858.99,367.41 862.01,369.86 865.83,375.05 867.48,378.96 875.05,396.89 875.77,400.97 875.02,422.16 874.16,446.55 873.24,450.62 866.12,461.46 854.72,478.83 848.42,483.45 825.81,491.03 820.44,492.83 815.04,495.5 813.82,496.95 813.14,497.77 812.59,499.76 812.21,502.73 L 786.18,502.16 C 784.5,497.54 781.95,495.19 778.26,494.45 772.36,493.27 746.36,480.37 741.43,476.18 731.23,467.5 726.6,452.7 725.15,424.15 724.13,404.17 724.24,403.33 728.91,394.83 734.59,384.5 759.39,358.79 767.64,354.68 770.81,353.1 777.32,350.29 782.11,348.44 L 790.8,345.08 z" id="path3078" style={{fill:!head ? "none":"#000000",stroke:"none"}}/>
            
            <path d="M 788.1,559.25 C 784.87,557.8 780.65,559.45 766.3,566.87 760.44,569.9 746.05,577.18 734.33,583.04 722.6,588.9 710.03,595.57 706.39,597.85 697.97,603.11 694.26,603.07 688.4,597.64 682.92,592.55 682.5,589.38 686.81,585.62 689.38,583.37 739.57,557.8 779.62,538.33 L 786.29,535.09 C 796.12,533.18 804.46,560.77 788.1,559.25 z" id="path3083" style={{fill:!leftArm?"none":"#000000",stroke:"none"}}/>
            
            <path d="M 800.41,716.63 C 791.51,719.1 773.26,736.01 750.12,763.45 709.9,811.13 712.51,808.89 702.47,804.32 695.62,801.19 695.12,796.51 700.89,789.58 735.23,748.33 772.86,708.08 782.12,702.68 L 785.35,700.79 C 792.86,697.36 806.43,706.16 800.41,716.63 z" id="path3093" style={{fill:!leftLeg?"none":"#000000",stroke:"none"}}/>
            
            <path d="M 818.07,697.88 C 819.96,700.68 832.97,714.19 847.25,728.17 893.67,773.62 905.18,788.56 900.53,797.27 895.82,806.08 886.04,802.87 877.98,789.88 871.79,779.92 809.78,718.72 803.67,716.49 802.49,716.19 801.45,716.38 800.41,716.63 801.85,698.47 809.63,688.54 818.07,697.88 z" id="path3088" style={{fill:!rightLeg?"none":"#000000",stroke:"none"}}/>
            
            <path d="M 814.32,571.14 C 814.69,573.94 814.87,595.82 814.71,619.77 814.29,684.51 814.63,692.43 818.0,697.77 818.02,697.8 818.05,697.84 818.07,697.88 817.83,714.55 777.26,714.7 785.35,700.79 L 788.68,698.85 789.39,632.63 C 789.78,596.21 790.66,565.5 791.35,564.38 792.04,563.27 791.2,561.33 789.48,560.08 789.03,559.74 788.58,559.47 788.1,559.25 L 786.29,535.09 789.39,533.58 788.76,519.36 C 788.42,511.7 787.62,506.1 786.18,502.16 795.2,499.62 803.16,499.39 812.21,502.73 811.81,505.87 811.6,510.09 811.6,515.15 811.6,529.21 814.52,532.88 818.08,535.38 818.85,535.92 817.18,534.52 818.2,547.98 816.86,553.66 822.82,560.86 816.59,561.78 816.59,561.78 813.83,567.49 814.32,571.14 z" id="path3133" style={{fill:!body?"none":"#000000",stroke:"none"}}/>
            
            <path d="M 818.03,534.95 C 819.58,535.72 821.1,536.24 821.98,536.24 824.68,536.24 852.24,551.37 864.5,559.58 868.68,562.38 872.62,564.68 873.26,564.68 873.9,564.68 878.08,567.7 882.54,571.41 887.0,575.11 895.29,581.18 900.96,584.9 909.75,590.66 911.2,592.35 910.73,596.37 910.01,602.6 901.76,606.88 896.22,603.89 884.45,597.53 877.1,592.92 869.53,587.14 864.87,583.58 860.02,580.67 858.75,580.67 857.48,580.67 855.59,579.64 854.54,578.38 853.5,577.12 847.2,573.42 840.56,570.16 833.91,566.9 827.09,563.54 825.39,562.68 822.55,561.24 820.19,560.71 818.37,561.02 815.15,550.94 817.87,543.51 818.03,534.95 z" id="path3069" style={{fill:!rightArm?"none":"#000000",stroke:"none"}}/>
            
            <path d="M 817.33,463.1 C 801.54,458.4 787.75,460.62 771.97,463.1 L 771.97,458.98 C 787.71,454.21 801.54,456.55 817.33,458.98 z M 792.66,422.34 798.26,422.34 798.26,443.51 789.07,443.06 C 792.45,434.85 793.31,434.59 792.66,422.34 z M 838.19,405.06 C 838.19,409.21 833.17,412.58 826.97,412.58 820.78,412.58 815.76,409.21 815.76,405.06 815.76,400.91 820.78,397.55 826.97,397.55 833.17,397.55 838.19,400.91 838.19,405.06 z M 787.05,404.28 C 787.05,408.43 782.03,411.79 775.83,411.79 769.64,411.79 764.62,408.43 764.62,404.28 764.62,400.13 769.64,396.76 775.83,396.76 782.03,396.76 787.05,400.13 787.05,404.28 z" id="rect3124" style={{fill:!face?"none":"#f00"}}/>
            
        </svg>
    )
}