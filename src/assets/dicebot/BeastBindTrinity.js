/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$gsub', '$last_match', '$bbt_check', '$==', '$>=', '$debug', '$match', '$[]', '$to_i', '$nil?', '$parren_killer', '$+', '$<=', '$each', '$scan', '$min', '$split', '$<', '$size', '$push', '$-', '$>', '$roll', '$&', '$sortType', '$collect', '$empty?', '$sort!', '$dup', '$max', '$[]=', '$!=', '$join', '$to_s', '$sendMode', '$=~', '$check_suc', '$===', '$bbt_emotion_table', '$bbt_exposure_table', '$bbt_face_table', '$get_table_by_d66', '$get_table_by_1d6']);
  return (function($base, $super, $parent_nesting) {
    function $BeastBindTrinity(){};
    var self = $BeastBindTrinity = $klass($base, $super, 'BeastBindTrinity', $BeastBindTrinity);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_BeastBindTrinity_initialize_1, TMP_BeastBindTrinity_gameName_2, TMP_BeastBindTrinity_gameType_3, TMP_BeastBindTrinity_getHelpMessage_4, TMP_BeastBindTrinity_changeText_14, TMP_BeastBindTrinity_dice_command_xRn_15, TMP_BeastBindTrinity_check_2D6_16, TMP_BeastBindTrinity_bbt_check_22, TMP_BeastBindTrinity_rollDiceCommand_23, TMP_BeastBindTrinity_bbt_emotion_table_24, TMP_BeastBindTrinity_bbt_exposure_table_25, TMP_BeastBindTrinity_bbt_face_table_26;

    def.nick_e = nil;
    
    self.$setPrefixes(["\\d+BB", "EMO", "EXPO_.", "FACE_."]);
    
    Opal.defn(self, '$initialize', TMP_BeastBindTrinity_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_BeastBindTrinity_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_BeastBindTrinity_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_BeastBindTrinity_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      self.sortType = 0;
      return (self.d66Type = 2);
    }, TMP_BeastBindTrinity_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_BeastBindTrinity_gameName_2 = function $$gameName() {
      var self = this;

      return "ビーストバインド トリニティ"
    }, TMP_BeastBindTrinity_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_BeastBindTrinity_gameType_3 = function $$gameType() {
      var self = this;

      return "BeastBindTrinity"
    }, TMP_BeastBindTrinity_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_BeastBindTrinity_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定　(nBB+m%w@x#y$z&v)\n" + "　n個のD6を振り、出目の大きい2個から達成値を算出。修正mも可能。\n" + "　\n" + "　%w、@x、#y、$z、&vはすべて省略可能。\n" + "＞%w：現在の人間性が w であるとして、クリティカル値(C値)を計算。\n" + "・省略した場合、C値=12として達成値を算出する。\n" + "＞@x：クリティカル値修正。（加減式でも入力可能）\n" + "・xに直接数字を書くと、C値をその数字に上書きする。\n" + "　「絶対にクリティカルしない」状態は、@13など xを13以上に指定すること。\n" + "・xの先頭が「+」か「-」なら、計算したC値にその値を加算。例）@-1、@+2\n" + "　この方法でC値をプラスする場合、上限は12となる。\n" + "＞#y、#Ay：ファンブル値修正。（加減式でも入力可能）\n" + "・yに直接数字を書くと、ファンブル値をその数字に設定。\n" + "・yの数字の先頭が「+」か「-」なら、ファンブル値=2にその数字を加算。例）#+2\n" + "・※#Ayとすると、ファンブルしても達成値を通常通り算出。　例）#A+1\n" + "＞$z：ダイスの出目をzに固定して判定する。複数指定可。\n" + "　　　《運命歪曲》など「ダイスの１個を振り直す」効果等に使用する。\n" + "　例）2BB$1 →ダイスを2個振る判定で、ダイス1個の出目を1で固定\n" + "　例）2BB$16→ダイスを2個振る判定で、ダイスの出目を1と6で固定\n" + "＞&v：出目がv未満のダイスがあれば、出目がvだったものとして達成値を計算する。\n" + "　例）2BB&3 →出目3未満（→出目1、2）を出目3だったものとして計算。\n" + "\n" + "・D66ダイスあり\n" + "・邂逅表：EMO\n" + "・暴露表：EXPO_A　　・魔獣化暴露表：EXPO_B\n" + "・アイドル専用暴露表：EXPO_I\n" + "・アイドル専用魔獣化暴露表：EXPO_J\n" + "・正体判明チャートA～C：FACE_A、FACE_B、FACE_C\n"
    }, TMP_BeastBindTrinity_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_BeastBindTrinity_changeText_14 = function $$changeText(string) {
      var TMP_5, TMP_6, TMP_7, TMP_8, TMP_9, TMP_10, TMP_11, TMP_12, TMP_13, self = this;

      
      string = $send(string, 'gsub', [/(\d+)BB6/i], (TMP_5 = function(){var self = TMP_5.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "R6"}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));
      string = $send(string, 'gsub', [/(\d+)BB/i], (TMP_6 = function(){var self = TMP_6.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "R6"}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
      string = $send(string, 'gsub', [/(\d+)BF6/i], (TMP_7 = function(){var self = TMP_7.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "Q6"}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7));
      string = $send(string, 'gsub', [/(\d+)BF/i], (TMP_8 = function(){var self = TMP_8.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "Q6"}, TMP_8.$$s = self, TMP_8.$$arity = 0, TMP_8));
      string = $send(string, 'gsub', [/\%([\-\d]+)/i], (TMP_9 = function(){var self = TMP_9.$$s || this;

      return "" + "[H:" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "]"}, TMP_9.$$s = self, TMP_9.$$arity = 0, TMP_9));
      string = $send(string, 'gsub', [/\@([\+\-\d]+)/i], (TMP_10 = function(){var self = TMP_10.$$s || this;

      return "" + "[C" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "]"}, TMP_10.$$s = self, TMP_10.$$arity = 0, TMP_10));
      string = $send(string, 'gsub', [/\#([A]?[\+\-\d]+)/i], (TMP_11 = function(){var self = TMP_11.$$s || this;

      return "" + "[F" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "]"}, TMP_11.$$s = self, TMP_11.$$arity = 0, TMP_11));
      string = $send(string, 'gsub', [/\$([1-6]+)/i], (TMP_12 = function(){var self = TMP_12.$$s || this;

      return "" + "[S" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "]"}, TMP_12.$$s = self, TMP_12.$$arity = 0, TMP_12));
      string = $send(string, 'gsub', [/\&(\d)/i], (TMP_13 = function(){var self = TMP_13.$$s || this;

      return "" + "[U" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "]"}, TMP_13.$$s = self, TMP_13.$$arity = 0, TMP_13));
      return string;
    }, TMP_BeastBindTrinity_changeText_14.$$arity = 1);
    
    Opal.defn(self, '$dice_command_xRn', TMP_BeastBindTrinity_dice_command_xRn_15 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      
      self.nick = nick_e;
      return self.$bbt_check(string);
    }, TMP_BeastBindTrinity_dice_command_xRn_15.$$arity = 2);
    
    Opal.defn(self, '$check_2D6', TMP_BeastBindTrinity_check_2D6_16 = function $$check_2D6(total_n, _dice_n, signOfInequality, diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var self = this;

      
      if (signOfInequality['$=='](">=")) {
        } else {
        return ""
      };
      if ($truthy($rb_ge(total_n, diff))) {
        return " ＞ 成功"
        } else {
        return " ＞ 失敗"
      };
    }, TMP_BeastBindTrinity_check_2D6_16.$$arity = 8);
    
    Opal.defn(self, '$bbt_check', TMP_BeastBindTrinity_bbt_check_22 = function $$bbt_check(string) {
      var TMP_17, TMP_18, TMP_19, $a, $b, TMP_20, TMP_21, self = this, output = nil, m = nil, humanity = nil, critical = nil, fumble = nil, dicesubs = nil, nofumble = nil, dicepull = nil, pul_flg = nil, dice_c = nil, bonus = nil, signOfInequality = nil, diff = nil, bonusText = nil, str_critical = nil, str_fumble = nil, str_dicesubs = nil, n_cri = nil, n_fum = nil, dice_now = nil, dice_str = nil, n_max = nil, total_n = nil, cri_flg = nil, cri_bonus = nil, fum_flg = nil, rer_num = nil, dice_tc = nil, _ = nil, dice_num = nil, dice_num_old = nil, dold_str = nil, showstring = nil;

      
      output = "1";
      self.$debug("bbt string", string);
      if ($truthy((m = /(^|\s)S?((\d+)R6([\+\-\d]*)(\[H:([\-\d]+)\])?(\[C([\+\-\d]+)\])?(\[F(A)?([\+\-\d]+)\])?(\[S([1-6]+)\])?(\[U([1-6])\])?(([>=]+)(\d+))?)(\s|$)/i.$match(string)))) {
        } else {
        
        self.$debug("not mutch");
        return output;
      };
      humanity = 99;
      critical = 12;
      fumble = 2;
      dicesubs = [];
      nofumble = false;
      dicepull = false;
      pul_flg = false;
      string = m['$[]'](2);
      dice_c = m['$[]'](3).$to_i();
      bonus = 0;
      signOfInequality = "";
      diff = 0;
      bonusText = m['$[]'](4);
      if ($truthy(bonusText['$nil?']())) {
        } else {
        bonus = self.$parren_killer($rb_plus($rb_plus("(0", bonusText), ")")).$to_i()
      };
      if ($truthy(m['$[]'](5))) {
        
        if ($truthy(m['$[]'](6))) {
          humanity = m['$[]'](6).$to_i()};
        self.$debug("" + "▼現在人間性 取得 " + (humanity));
        if ($truthy($rb_le(humanity, 0))) {
          
          critical = 9;
          self.$debug("" + "▼現在人間性からC値取得 " + (critical));
        } else if ($truthy($rb_le(humanity, 20))) {
          
          critical = 10;
          self.$debug("" + "▼現在人間性からC値取得 " + (critical));
        } else if ($truthy($rb_le(humanity, 40))) {
          
          critical = 11;
          self.$debug("" + "▼現在人間性からC値取得 " + (critical));};};
      if ($truthy(m['$[]'](7))) {
        
        if ($truthy(m['$[]'](8))) {
          str_critical = m['$[]'](8)};
        self.$debug("" + "▼C値文字列 取得 " + (str_critical));};
      if ($truthy(m['$[]'](9))) {
        
        if ($truthy(m['$[]'](10))) {
          nofumble = true};
        self.$debug("" + "▼F値耐性 " + (nofumble));
        if ($truthy(m['$[]'](11))) {
          str_fumble = m['$[]'](11)};
        self.$debug("" + "▼F値文字列 取得 " + (str_fumble));};
      if ($truthy(m['$[]'](12))) {
        
        if ($truthy(m['$[]'](13))) {
          str_dicesubs = m['$[]'](13)};
        self.$debug("" + "▼出目予約用の文字列 取得 " + (str_dicesubs));};
      if ($truthy(m['$[]'](14))) {
        
        if ($truthy(m['$[]'](15))) {
          dicepull = m['$[]'](15).$to_i()};
        self.$debug("" + "▼出目引き上げモード 取得 " + (dicepull));};
      if ($truthy(m['$[]'](17))) {
        signOfInequality = m['$[]'](17)};
      if ($truthy(m['$[]'](18))) {
        diff = m['$[]'](18).$to_i()};
      if ($truthy(str_critical)) {
        
        n_cri = 0;
        $send(str_critical.$scan(/[\+\-]?\d+/), 'each', [], (TMP_17 = function(num){var self = TMP_17.$$s || this;
if (num == null) num = nil;
        return (n_cri = $rb_plus(n_cri, num.$to_i()))}, TMP_17.$$s = self, TMP_17.$$arity = 1, TMP_17));
        self.$debug("" + "▼C値指定符 算出 " + (n_cri));
        critical = (function() {if ($truthy(str_critical.$match(/^[\+\-][\+\-\d]+/))) {
          return [$rb_plus(critical, n_cri), 12].$min()
          } else {
          return n_cri
        }; return nil; })();
        self.$debug("" + "▼クリティカル値 " + (critical));};
      if ($truthy(str_fumble)) {
        
        n_fum = 0;
        $send(str_fumble.$scan(/[\+\-]?\d+/), 'each', [], (TMP_18 = function(num){var self = TMP_18.$$s || this;
if (num == null) num = nil;
        return (n_fum = $rb_plus(n_fum, num.$to_i()))}, TMP_18.$$s = self, TMP_18.$$arity = 1, TMP_18));
        self.$debug("" + "▼F値指定符 算出 " + (n_fum));
        fumble = (function() {if ($truthy(str_fumble.$match(/^[\+\-][\+\-\d]+/))) {
          return $rb_plus(fumble, n_fum)
          } else {
          return n_fum
        }; return nil; })();
        self.$debug("" + "▼ファンブル値 " + (fumble));};
      if ($truthy(str_dicesubs)) {
        
        $send(str_dicesubs.$split(/(?:)/), 'each', [], (TMP_19 = function(i){var self = TMP_19.$$s || this;
if (i == null) i = nil;
        if ($truthy($rb_lt(dicesubs.$size(), dice_c))) {
            return dicesubs.$push(i.$to_i())
            } else {
            return nil
          }}, TMP_19.$$s = self, TMP_19.$$arity = 1, TMP_19));
        self.$debug("" + "▼ダイス出目予約 " + (dicesubs));};
      dice_now = 0;
      dice_str = "";
      n_max = 0;
      total_n = 0;
      cri_flg = false;
      cri_bonus = 0;
      fum_flg = false;
      rer_num = [];
      dice_tc = $rb_minus(dice_c, dicesubs.$size());
      if ($truthy($rb_gt(dice_tc, 0))) {
        
        $b = self.$roll(dice_tc, 6, self.$sortType()['$&'](1)), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
        dice_num = $send($rb_plus(dice_str.$split(/,/), dicesubs), 'collect', [], (TMP_20 = function(n){var self = TMP_20.$$s || this;
if (n == null) n = nil;
        return n.$to_i()}, TMP_20.$$s = self, TMP_20.$$arity = 1, TMP_20));
      } else if ($truthy(dicesubs['$empty?']())) {
        return "ERROR:振るダイスの数が0個です"
        } else {
        dice_num = dicesubs
      };
      dice_num['$sort!']();
      if ($truthy(dicepull)) {
        
        self.$debug("" + "▼出目引き上げ " + (dicepull));
        dice_num_old = dice_num.$dup();
        $send(Opal.Range.$new(0,dice_num.$size(), true), 'each', [], (TMP_21 = function(i){var self = TMP_21.$$s || this, $writer = nil;
if (i == null) i = nil;
        
          $writer = [i, [dice_num['$[]'](i), dicepull].$max()];
          $send(dice_num, '[]=', Opal.to_a($writer));
          return $writer[$rb_minus($writer["length"], 1)];}, TMP_21.$$s = self, TMP_21.$$arity = 1, TMP_21));
        pul_flg = dice_num['$!='](dice_num_old);
        self.$debug("" + "▼出目引き上げの有無について " + (pul_flg));
        dice_num['$sort!']();
        dold_str = dice_num_old.$join(",");};
      dice_str = dice_num.$join(",");
      if (dice_c['$=='](1)) {
        dice_now = dice_num['$[]']($rb_minus(dice_c, 1))
        } else {
        dice_now = $rb_plus(dice_num['$[]']($rb_minus(dice_c, 2)), dice_num['$[]']($rb_minus(dice_c, 1)))
      };
      if ($truthy($rb_ge(dice_now, critical))) {
        
        cri_flg = true;
        cri_bonus = 20;};
      total_n = [$rb_plus($rb_plus(dice_now, bonus), cri_bonus), 0].$max();
      if ($truthy($rb_ge(fumble, dice_now))) {
        
        fum_flg = true;
        if ($truthy(nofumble)) {
          } else {
          total_n = 0
        };};
      dice_str = "" + "[" + (dice_str) + "]";
      output = "";
      if ($truthy(pul_flg)) {
        output = $rb_plus(output, "" + "[" + (dold_str) + "] ＞ ")};
      output = $rb_plus(output, "" + (dice_now) + (dice_str));
      if ($truthy((($a = fum_flg['$=='](true)) ? nofumble['$=='](false) : fum_flg['$=='](true)))) {
        output = $rb_plus(output, "【ファンブル】")
        } else {
        
        if ($truthy(fum_flg)) {
          output = $rb_plus(output, "【ファンブル】")};
        if ($truthy($rb_gt(bonus, 0))) {
          output = $rb_plus(output, "" + "+" + (bonus))
        } else if ($truthy($rb_lt(bonus, 0))) {
          output = $rb_plus(output, bonus.$to_s())};
        if ($truthy(cri_flg)) {
          output = $rb_plus(output, "" + "+" + (cri_bonus) + "【クリティカル】")};
      };
      showstring = "" + (dice_c) + "R6";
      if ($truthy($rb_gt(bonus, 0))) {
        showstring = $rb_plus(showstring, "" + "+" + (bonus))
      } else if ($truthy($rb_lt(bonus, 0))) {
        showstring = $rb_plus(showstring, bonus.$to_s())};
      showstring = $rb_plus(showstring, "" + "[C" + (critical) + ",F" + (fumble) + "]");
      if ($truthy(signOfInequality['$!='](""))) {
        showstring = $rb_plus(showstring, "" + (signOfInequality) + (diff))};
      if ($truthy($rb_gt(self.$sendMode(), 0))) {
        if ($truthy(/[^\d\[\]]+/['$=~'](output))) {
          output = "" + (self.nick_e) + ": (" + (showstring) + ") ＞ " + (output) + " ＞ " + (total_n)
          } else {
          output = "" + (self.nick_e) + ": (" + (showstring) + ") ＞ " + (total_n)
        }
        } else {
        output = "" + (self.nick_e) + ": (" + (showstring) + ") ＞ " + (total_n)
      };
      if ($truthy(signOfInequality['$!='](""))) {
        output = $rb_plus(output, self.$check_suc(total_n, dice_now, signOfInequality, diff, 2, 6, 0, 0))};
      return output;
    }, TMP_BeastBindTrinity_bbt_check_22.$$arity = 1);
    
    Opal.defn(self, '$rollDiceCommand', TMP_BeastBindTrinity_rollDiceCommand_23 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, output = nil, type = nil, total_n = nil, $case = nil, tabletype = nil;

      
      output = "1";
      type = "";
      total_n = 0;
      $case = command;
      if (/^EMO/i['$===']($case)) {
      type = "邂逅表";
      $b = self.$bbt_emotion_table(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if (/^EXPO_([ABIJ])/['$===']($case)) {
      $case = Opal.const_get_relative($nesting, 'Regexp').$last_match(1);
      if (/A/['$===']($case)) {
      type = "暴露表";
      tabletype = 1;}
      else if (/B/['$===']($case)) {
      type = "魔獣化暴露表";
      tabletype = 2;}
      else if (/I/['$===']($case)) {
      type = "アイドル専用暴露表";
      tabletype = 3;}
      else if (/J/['$===']($case)) {
      type = "アイドル専用魔獣化暴露表";
      tabletype = 4;};
      $b = self.$bbt_exposure_table(tabletype), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if (/^FACE_([ABC])/['$===']($case)) {
      $case = Opal.const_get_relative($nesting, 'Regexp').$last_match(1);
      if (/A/['$===']($case)) {
      type = "正体判明チャートA";
      tabletype = 1;}
      else if (/B/['$===']($case)) {
      type = "正体判明チャートB";
      tabletype = 2;}
      else if (/C/['$===']($case)) {
      type = "正体判明チャートC";
      tabletype = 3;};
      $b = self.$bbt_face_table(tabletype), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;};
      if ($truthy(output['$!=']("1"))) {
        output = "" + (type) + "(" + (total_n) + ") ＞ " + (output)};
      return output;
    }, TMP_BeastBindTrinity_rollDiceCommand_23.$$arity = 1);
    
    Opal.defn(self, '$bbt_emotion_table', TMP_BeastBindTrinity_bbt_emotion_table_24 = function $$bbt_emotion_table() {
      var self = this, table = nil;

      
      table = ["家族", "家族", "信頼", "信頼", "忘却", "忘却", "慈愛", "慈愛", "憧憬", "憧憬", "感銘", "感銘", "同志", "同志", "幼子", "幼子", "興味", "興味", "ビジネス", "ビジネス", "師事", "師事", "好敵手", "好敵手", "友情", "友情", "忠誠", "忠誠", "恐怖", "恐怖", "執着", "執着", "軽蔑", "軽蔑", "憎悪", "憎悪"];
      return self.$get_table_by_d66(table);
    }, TMP_BeastBindTrinity_bbt_emotion_table_24.$$arity = 0);
    
    Opal.defn(self, '$bbt_exposure_table', TMP_BeastBindTrinity_bbt_exposure_table_25 = function $$bbt_exposure_table(type) {
      var self = this, $case = nil, table = nil;

      
      $case = type;
      if ((1)['$===']($case)) {table = ["噂になるがすぐ忘れられる", "都市伝説として処理される", "ワイドショーをにぎわす", "シナリオ中［迫害状態］になる", "絆の対象ひとりに正体が知られる", "魔獣化暴露表へ"]}
      else if ((2)['$===']($case)) {table = ["トンデモ業界の伝説になる", "シナリオ中［迫害状態］になる", "シナリオ中［迫害状態］になる", "絆の対象ひとりに正体が知られる", "絆の対象ひとりに正体が知られる", "自衛隊退魔部隊×2D6体の襲撃"]}
      else if ((3)['$===']($case)) {table = ["愉快な伝説として人気になる", "ワイドショーをにぎわす", "炎上。シナリオ中［迫害状態］", "所属事務所に2D6時間説教される", "絆の対象ひとりに正体が知られる", "アイドル専用魔獣化暴露表へ"]}
      else if ((4)['$===']($case)) {table = ["シナリオ中［迫害状態］になる", "シナリオ中［迫害状態］になる", "絆の対象ひとりに正体が知られる", "事務所から契約を解除される", "絆の対象ひとりに正体が知られる", "1D6本のレギュラー番組を失う"]};
      return self.$get_table_by_1d6(table);
    }, TMP_BeastBindTrinity_bbt_exposure_table_25.$$arity = 1);
    return (Opal.defn(self, '$bbt_face_table', TMP_BeastBindTrinity_bbt_face_table_26 = function $$bbt_face_table(type) {
      var self = this, $case = nil, table = nil;

      
      $case = type;
      if ((1)['$===']($case)) {table = ["あなたを受け入れてくれる", "あなたを受け入れてくれる", "絆が（拒絶）に書き換わる", "絆がエゴに書き換わる", "気絶しその事実を忘れる", "精神崩壊する"]}
      else if ((2)['$===']($case)) {table = ["あなたを受け入れてくれる", "狂乱し攻撃してくる", "退場。その場から逃亡。暴露表へ", "絆がエゴに書き換わる", "精神崩壊する", "精神崩壊する"]}
      else if ((3)['$===']($case)) {table = ["あなたを受け入れてくれる", "退場。その場から逃亡。暴露表へ", "退場。その場から逃亡。暴露表へ", "絆がエゴに書き換わる", "精神崩壊する", "精神崩壊する"]};
      return self.$get_table_by_1d6(table);
    }, TMP_BeastBindTrinity_bbt_face_table_26.$$arity = 1), nil) && 'bbt_face_table';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
