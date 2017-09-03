/* Generated by Opal 0.10.5 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$==', '$>=', '$floor', '$/', '$+', '$<=', '$*']);
  return (function($base, $super) {
    function $JamesBond(){};
    var self = $JamesBond = $klass($base, $super, 'JamesBond', $JamesBond);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4;

    Opal.defn(self, '$gameName', TMP_1 = function $$gameName() {
      var self = this;

      return "ジェームズ・ボンド007";
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$gameType', TMP_2 = function $$gameType() {
      var self = this;

      return "JamesBond";
    }, TMP_2.$$arity = 0);

    Opal.defn(self, '$getHelpMessage', TMP_3 = function $$getHelpMessage() {
      var self = this, info = nil;

      return info = "・1D100の目標値判定で、効果レーティングを1～4で自動判定。\n　例）1D100<=50\n　　　JamesBond : (1D100<=50) → 20 → 効果3（良）\n";
    }, TMP_3.$$arity = 0);

    return (Opal.defn(self, '$check_1D100', TMP_4 = function $$check_1D100(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var $a, self = this, base = nil;

      if ((($a = (signOfInequality['$==']("<="))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return ""
      };
      if ((($a = ($rb_ge(total_n, 100))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return " ＞ 失敗"};
      base = ($rb_divide(($rb_plus(diff, 9)), 10)).$floor();
      if ((($a = ($rb_le(total_n, base))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return " ＞ 効果1（完璧）"};
      if ((($a = ($rb_le(total_n, $rb_times(base, 2)))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return " ＞ 効果2（かなり良い）"};
      if ((($a = ($rb_le(total_n, $rb_times(base, 5)))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return " ＞ 効果3（良）"};
      if ((($a = ($rb_le(total_n, diff))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return " ＞ 効果4（まあまあ）"};
      return " ＞ 失敗";
    }, TMP_4.$$arity = 8), nil) && 'check_1D100';
  })($scope.base, $scope.get('DiceBot'))
})(Opal);

/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);