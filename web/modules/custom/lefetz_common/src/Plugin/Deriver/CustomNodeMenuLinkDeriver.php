<?php

namespace Drupal\lefetz_common\Plugin\Deriver;

use Drupal\Component\Plugin\Derivative\DeriverBase;
use Drupal\node\Entity\Node;

class CustomNodeMenuLinkDeriver extends DeriverBase {

 public function getDerivativeDefinitions($base) {

  $plugin_definitions = [];
  foreach (Node::loadMultiple() as $nid => $node) {
   $plugin_definitions[$nid] = $base;
   $plugin_definitions[$nid]['route_parameters']['node'] = $nid;
   $plugin_definitions[$nid]['title'] = $node->label();
  }
  return $plugin_definitions;
 }

}
