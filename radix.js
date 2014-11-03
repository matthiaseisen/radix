var radix = [
        {
            'name': 'Decimal',
            'base': 10,
            'input': 'r10',
            'refresh': function(){refresh(0);},
            'chars': ['0','1','2','3','4','5','6','7','8','9']
        },
        {
            'name': 'Binary',
            'base': 2,
            'input': 'r2',
            'refresh': function(){refresh(1);},
            'chars': ['0','1']
        },
        {
            'name': 'Hexadecimal',
            'base': 16,
            'input': 'r16',
            'refresh': function(){refresh(2);},
            'chars': ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
        },
        {
            'name': 'Octal',
            'base': 8,
            'input': 'r8',
            'refresh': function(){refresh(3);},
            'chars': ['0','1','2','3','4','5','6','7']
        },
        {
            'name': 'Duotrigesimal',
            'base': 32,
            'input': 'r32',
            'refresh': function(){refresh(4);},
            'chars': ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v']
        },
        {
            'name': 'Hexatridecimal',
            'base': 36,
            'input': 'r36',
            'refresh': function(){refresh(5);},
            'chars': ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        }
    ];
    
    dojo.ready(function(){
        for(i = 0; i < radix.length; i++){
            dojo.place('<div><div style="padding: 5px 0;"><strong>' + radix[i]['name'] + '</strong> (Base ' + radix[i]['base'] + ')</div><div style="padding: 5px 0;"><input type="text" value="" id="' + radix[i]['input'] + '" /></div></div>','numbers','last');
            dojo.connect(dojo.byId(radix[i]['input']),'onkeyup', radix[i]['refresh']);
        }
    });
    
    function refresh(key) {
        var current = dojo.byId(radix[key]['input']).value.toLowerCase();
        for(j = 0; j < current.length; j++){
            if(dojo.indexOf(radix[key]['chars'],current.charAt(j)) == -1) {
                current = current.replace(current.charAt(j),"");
            }
        }
        dojo.attr(dojo.byId(radix[key]['input']), 'value', current);
        for(k = 0; k < radix.length; k++) {
            if(radix[k]['base'] != radix[key]['base']) {
                var result = parseInt(dojo.byId(radix[key]['input']).value, radix[key]['base']).toString(radix[k]['base'])
                if(result != 'NaN') {
                    dojo.attr(dojo.byId(radix[k]['input']), 'value', result);
                } else {
                    dojo.attr(dojo.byId(radix[k]['input']), 'value', '');
                }
            }
        }
    }
