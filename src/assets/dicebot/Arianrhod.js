/* Generated by Opal 0.10.5 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$check_nD6', '$debug', '$>=', '$==']);
  return (function($base, $super) {
    function $Arianrhod(){};
    var self = $Arianrhod = $klass($base, $super, 'Arianrhod', $Arianrhod);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_6;

    Opal.defn(self, '$initialize', TMP_1 = function $$initialize() {
      var $a, $b, self = this, $iter = TMP_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_index = nil, $zuper_length = nil;

      TMP_1.$$p = null;
      $zuper = [];
      
      for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
        $zuper[$zuper_index] = arguments[$zuper_index];
      }
      ($a = ($b = self, Opal.find_super_dispatcher(self, 'initialize', TMP_1, false)), $a.$$p = $iter, $a).apply($b, $zuper);
      self.sendMode = 2;
      self.sortType = 1;
      return self.d66Type = 1;
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$gameName', TMP_2 = function $$gameName() {
      var self = this;

      return "アリアンロッド";
    }, TMP_2.$$arity = 0);

    Opal.defn(self, '$gameType', TMP_3 = function $$gameType() {
      var self = this;

      return "Arianrhod";
    }, TMP_3.$$arity = 0);

    Opal.defn(self, '$getHelpMessage', TMP_4 = function $$getHelpMessage() {
      var self = this;

      return "・クリティカル、ファンブルの自動判定を行います。(クリティカル時の追加ダメージも表示されます)\n・D66ダイスあり\n";
    }, TMP_4.$$arity = 0);

    Opal.defn(self, '$check_2D6', TMP_5 = function $$check_2D6(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      return self.$check_nD6(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max);
    }, TMP_5.$$arity = 8);

    return (Opal.defn(self, '$check_nD6', TMP_6 = function $$check_nD6(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var $a, self = this, result = nil;

      self.$debug("check_nD6 begin");
      if ((($a = ($rb_ge(n1, dice_cnt))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return " ＞ ファンブル"};
      if ((($a = ($rb_ge(n_max, 2))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return " ＞ クリティカル(+" + (n_max) + "D6)"};
      result = "";
      if ((($a = (signOfInequality['$=='](">="))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return result
      };
      if ((($a = (diff['$==']("?"))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return result};
      if ((($a = ($rb_ge(total_n, diff))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return " ＞ 成功"};
      return " ＞ 失敗";
    }, TMP_6.$$arity = 8), nil) && 'check_nD6';
  })($scope.base, $scope.get('DiceBot'))
})(Opal);

/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);