var elementData = [];

//Order or vars are num, weight, name, symbol, meltingpoint, boiling point, density, abundance, discovery, group, electrion config, ionization energy

function loadData()
{
        var appDir = Titanium.Filesystem.getResourcesDirectory();
        var dataFile = Titanium.Filesystem.getFile(appDir, 'data/elementdata.txt');
        if (dataFile.exists())
        {
            var dataStream = Titanium.Filesystem.getFileStream(dataFile);
            dataStream.open(Titanium.Filesystem.FILESTREAM_MODE_READ);
            var contents = dataStream.read();
            dataStream.close();
            var contentsList = contents.split(Titanium.Filesystem.getLineEnding());
            for(i = 0; i < contentsList.length; i++)
            {
                if (contentsList[i].indexOf(",") >= 0)
                {
                    items = contentsList[i].split(",");
                    elementData[i] = items;
                }  
            }
        }
        
}

loadData();
/*
elementData[0] = ['H', 'Hydrogen', 1, 1, 14.01, 20.28, 1766, 2.2, 72.8, 1, 1312.0, 53, 'Unknown', 'Unknown', 0.0899, 0.1805, 14300, 75]
elementData[1] = ['He', 'Helium', 2, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[2] = ['Li', 'Lithium', 3, 6.941, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[3] = ['Be', 'Beryllium', 4, 9.012182, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[4] = ['B', 'Boron', 5, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[5] = ['C', 'Carbon', 6, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[6] = ['N', 'Nitrogen', 7, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[7] = ['O', 'Oxygen', 8, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[8] = ['F', 'Flouride', 9, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[9] = ['Ne', 'Neon', 10, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[10] = ['Na', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[11] = ['Mg', 'Magnesium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[12] = ['Al', 'Alumium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[13] = ['Si', 'Silicon', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[14] = ['P', 'Phosphorus', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[15] = ['S', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[16] = ['Cl', 'Clorine', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[17] = ['Ar', 'Argon', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[18] = ['K', 'Potassium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[19] = ['Ca', 'Calcium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[20] = ['Sc', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[21] = ['Ti', 'titanium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[22] = ['V', 'Vanadium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[23] = ['Cr', 'Chromium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[24] = ['Mn', 'Manganese', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[25] = ['Fe', 'Iron', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[26] = ['Co', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[27] = ['Ni', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[28] = ['Cu', 'Copper', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[29] = ['Zn', 'Zinc', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[30] = ['Ga', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[31] = ['Ge', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[32] = ['As', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[33] = ['Se', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[34] = ['Br', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[35] = ['Kr', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[36] = ['Rb', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[37] = ['Sy', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[38] = ['Y', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[39] = ['Zr', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[40] = ['Nb', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[41] = ['Mo', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[42] = ['Tc', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[43] = ['Ru', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[44] = ['Rh', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[45] = ['Pd', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[46] = ['Ag', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[47] = ['Cd', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[48] = ['In', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[49] = ['Sn', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[50] = ['Sb', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[51] = ['Te', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[52] = ['I', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[53] = ['Xe', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[54] = ['Cs', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[55] = ['Ba', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[56] = ['La', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[57] = ['Ce', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[58] = ['Pr', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[59] = ['Nd', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[60] = ['Pm', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[61] = ['Sm', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[62] = ['Eu', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[63] = ['Gd', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[64] = ['Tb', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[65] = ['Dy', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[66] = ['Ho', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[67] = ['Er', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[68] = ['Tm', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[69] = ['Yb', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[70] = ['Lu', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[71] = ['Hf', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[72] = ['Ta', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[73] = ['W', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[74] = ['Re', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[75] = ['Os', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[76] = ['Ir', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[77] = ['Pt', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[78] = ['Au', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[79] = ['Hg', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[80] = ['Tl', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[81] = ['Pb', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[82] = ['Bi', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[83] = ['Po', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[84] = ['At', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[85] = ['Rn', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[86] = ['Fr', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[87] = ['Ra', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[88] = ['Ac', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[89] = ['Th', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[90] = ['Pa', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[91] = ['U', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[92] = ['Np', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[93] = ['Pu', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[94] = ['Am', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[95] = ['Cm', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[96] = ['Bk', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[97] = ['Cf', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[98] = ['Es', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[99] = ['Fm', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[100] = ['Md', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[101] = ['No', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[102] = ['Lr', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[103] = ['Rf', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[104] = ['Db', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[105] = ['Sg', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[106] = ['Bh', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[107] = ['Hs', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[108] = ['Mt', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[109] = ['Ds', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[110] = ['Rg', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[111] = ['Uub', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[112] = ['Uut', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[113] = ['Uuq', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[114] = ['Uup', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[115] = ['Uuh', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[116] = ['Uus', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
elementData[117] = ['Uuo', 'Sodium', 11, 4.002602, 0, 0, 1766, 0, 0, 1, 0, 0, 'Unknown', 'Unknown', 0, 0, 0, 0]
*/