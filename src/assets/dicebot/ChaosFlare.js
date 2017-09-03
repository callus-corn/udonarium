/* Generated by Opal 0.10.5 */
(function(Opal) {
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$set2Decks2Jokers', '$cardTrader', '$card_place=', '$canTapCard=', '$<=', '$-', '$+', '$==', '$>=', '$>']);
  return (function($base, $super) {
    function $ChaosFlare(){};
    var self = $ChaosFlare = $klass($base, $super, 'ChaosFlare', $ChaosFlare);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5;

    Opal.defn(self, '$postSet', TMP_1 = function $$postSet() {
      var $a, $b, $c, self = this;

      if ((($a = (($b = Opal.cvars['@@bcdice']) == null ? nil : $b)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        (($a = Opal.cvars['@@bcdice']) == null ? nil : $a).$cardTrader().$set2Decks2Jokers();
        (($a = [0]), $b = (($c = Opal.cvars['@@bcdice']) == null ? nil : $c).$cardTrader(), $b['$card_place='].apply($b, $a), $a[$a.length-1]);
        return (($a = [false]), $b = (($c = Opal.cvars['@@bcdice']) == null ? nil : $c).$cardTrader(), $b['$canTapCard='].apply($b, $a), $a[$a.length-1]);
        } else {
        return nil
      };
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$gameName', TMP_2 = function $$gameName() {
      var self = this;

      return "カオスフレア";
    }, TMP_2.$$arity = 0);

    Opal.defn(self, '$gameType', TMP_3 = function $$gameType() {
      var self = this;

      return "Chaos Flare";
    }, TMP_3.$$arity = 0);

    Opal.defn(self, '$getHelpMessage', TMP_4 = function $$getHelpMessage() {
      var self = this;

      return "失敗、成功の判定。差分値の計算も行います。\nファンブル時は達成値を-20します。\n";
    }, TMP_4.$$arity = 0);

    return (Opal.defn(self, '$check_2D6', TMP_5 = function $$check_2D6(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var $a, self = this, output = nil;

      output = "";
      if ((($a = ($rb_le(dice_n, 2))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        total_n = $rb_minus(total_n, 20);
        output = $rb_plus(output, " ＞ ファンブル(-20)");};
      if ((($a = (signOfInequality['$=='](">="))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return output
      };
      if ((($a = ($rb_ge(total_n, diff))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        output = $rb_plus(output, " ＞ 成功");
        if ((($a = ($rb_gt(total_n, diff))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          output = $rb_plus(output, " ＞ 差分値" + ($rb_minus(total_n, diff)))};
        } else {
        output = $rb_plus(output, " ＞ 失敗");
        output = $rb_plus(output, " ＞ 差分値" + ($rb_minus(total_n, diff)));
      };
      return output;
    }, TMP_5.$$arity = 8), nil) && 'check_2D6';
  })($scope.base, $scope.get('DiceBot'))
})(Opal);

/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);